/* Build step for House of the People slide show design system preview cards.
   The preview server needs subresource tokens, so every card must be
   self-contained. Author sources in <dir>/_src/, then run:

     await eval(await readFile('tools/build.js'));

   Source conventions:
     <!-- CARD group="…" … -->   first line  -> becomes <!-- @dsCard … -->
     <!--MEGACSS-->              in <head>   -> becomes <style> tokens + base64 fonts
     src="A:assets/bricks/x.png"             -> becomes a data URI

   Also emits slides/index.html — a contact sheet of every slide template.
*/
(async () => {
  const SRC_DIRS = globalThis.__buildDirs || ['slides/_src', 'guidelines/_src', 'components/slides/_src'];
  const FONTS = [
    ['Adelphe', 400, 'normal', 'fonts/Adelphe-FlorealRegular.otf'],
    ['Adelphe', 600, 'normal', 'fonts/Adelphe-FlorealSemiBold.otf'],
    ['Adelphe', 400, 'italic', 'fonts/Adelphe-FlorealItalic.otf'],
    ['BBB Poppins TN', 400, 'normal', 'fonts/BBBPoppinsTN-TextRegular.otf'],
    ['BBB Poppins TN', 700, 'normal', 'fonts/BBBPoppinsTN-TextBold.otf'],
  ];

  const b64 = async (path) => {
    const blob = await readFileBinary(path);
    const buf = new Uint8Array(await blob.arrayBuffer());
    let s = '';
    for (let i = 0; i < buf.length; i += 8192) s += String.fromCharCode.apply(null, buf.subarray(i, i + 8192));
    return btoa(s);
  };

  let faces = '';
  for (const [fam, wt, style, path] of FONTS) {
    faces += `@font-face{font-family:"${fam}";src:url("data:font/otf;base64,${await b64(path)}") format("opentype");font-weight:${wt};font-style:${style};font-display:swap}\n`;
  }
  const tokens = (await readFile('tokens/colors.css')) + (await readFile('tokens/type.css')) + (await readFile('tokens/slide.css'));
  const css = `<style>\n${faces}${tokens}\n</style>`;

  const imgCache = new Map();
  const dataUri = async (rel) => {
    if (!imgCache.has(rel)) {
      const ext = rel.split('.').pop().toLowerCase();
      const mime = ext === 'png' ? 'image/png' : (ext === 'jpg' || ext === 'jpeg') ? 'image/jpeg' : 'image/' + ext;
      imgCache.set(rel, `data:${mime};base64,${await b64(rel)}`);
    }
    return imgCache.get(rel);
  };

  const sheet = [];
  let built = 0;
  for (const dir of SRC_DIRS) {
    let files = [];
    try { files = await ls(dir); } catch (e) { continue; }
    for (const name of files.sort()) {
      if (!name.endsWith('.html')) continue;
      let html = await readFile(`${dir}/${name}`);
      html = replaceText(html, '<!-- CARD', '<!-- @dsCard');
      html = replaceText(html, '<!--MEGACSS-->', css);
      for (const ref of new Set([...html.matchAll(/A:([\w./-]+)/g)].map(m => m[1]))) {
        html = replaceText(html, 'A:' + ref, await dataUri(ref));
      }
      const outDir = dir.replace(/\/_src$/, '');
      await saveFile(`${outDir}/${name}`, html);
      built++;
      if (dir === 'slides/_src') {
        const label = (html.match(/name="([^"]+)"/) || [, name])[1];
        const inner = (html.match(/<body[^>]*>([\s\S]*)<\/body>/) || [, ''])[1];
        // scope each card's local CSS to its own wrapper so templates can't bleed into each other
        const id = 'card-' + name.replace(/\.html$/, '');
        const local = (html.match(/<style>([\s\S]*?)<\/style>/g) || []).slice(1).join('\n')
          .replace(/<\/?style>/g, '')
          .replace(/([^{}]+)\{([^{}]*)\}/g, (m, sel, body) => {
            const kept = sel.split(',').map(s => s.trim())
              .filter(s => s && s !== 'html' && s !== 'body');
            return kept.length ? kept.map(s => `#${id} ${s}`).join(', ') + '{' + body + '}\n' : '';
          });
        sheet.push({ label, inner, local, file: name, id });
      }
      log('built ' + outDir + '/' + name);
    }
  }

  if (sheet.length) {
    const S = 0.33;
    const cards = sheet.map(s => `
      <figure style="margin:0;">
        <figcaption class="t-eyebrow" style="margin-bottom:12px;">${s.label}</figcaption>
        <div style="width:${Math.round(1920 * S)}px; height:${Math.round(1080 * S)}px; overflow:hidden; outline:1px solid rgba(0,0,0,.15);">
          <div id="${s.id}" style="width:1920px; height:1080px; transform:scale(${S}); transform-origin:0 0;">${s.inner}</div>
        </div>
      </figure>`).join('\n');
    await saveFile('slides/index.html', `<!DOCTYPE html>
<html lang="en-GB"><head><meta charset="utf-8"><title>House of the People — slide templates</title>
${css}
<style>
${sheet.map(s => s.local).join('\n')}
</style>
<style>html,body{margin:0;background:var(--c-white);} .t-eyebrow{font-size:16px;}</style>
</head><body>
<div style="padding:64px; display:flex; flex-direction:column; gap:48px;">
  <div>
    <h1 style="margin:0 0 8px; font:600 44px/1.1 var(--ff-serif);">Slide templates</h1>
    <p style="margin:0; font:400 20px/1.4 var(--ff-sans);">House of the People slide show design system — copy the source of any template from <code>slides/_src/</code>.</p>
  </div>
  <div style="display:grid; grid-template-columns:repeat(3, ${Math.round(1920 * S)}px); gap:48px;">
${cards}
  </div>
</div>
</body></html>`);
    log('built slides/index.html (' + sheet.length + ' templates)');
  }
  log(`${built} card(s); css payload ${(css.length / 1024).toFixed(0)}kb`);
})()
