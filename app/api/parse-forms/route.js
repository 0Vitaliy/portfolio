import puppeteer from 'puppeteer';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const baseUrl = searchParams.get('url');

  if (!baseUrl) {
    return new Response(JSON.stringify({ error: 'Missing URL' }), {
      status: 400,
    });
  }

  const visited = new Set(); // щоб уникнути повторів
  const forms = [];

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  try {
    const page = await browser.newPage();
    await page.goto(baseUrl, { waitUntil: 'domcontentloaded' });

    // Збір лінків
    const internalLinks = await page.$$eval('a[href]', anchors =>
      anchors
        .map(a => a.href)
        .filter(href => href.startsWith(window.location.origin)) // тільки внутрішні
    );

    // Додаємо головну сторінку також
    internalLinks.unshift(baseUrl);

    for (const link of new Set(internalLinks)) {
      if (visited.has(link)) continue;
      visited.add(link);

      try {
        await page.goto(link, { waitUntil: 'domcontentloaded' });

        const foundForms = await page.$$eval('form', forms =>
          forms.map(form => {
            const inputs = [...form.querySelectorAll('input, textarea, select')];
            return {
              page: window.location.href,
              action: form.action,
              fields: inputs.map(i => ({
                name: i.name,
                type: i.type || i.tagName.toLowerCase(),
              })),
            };
          })
        );

        if (foundForms.length > 0) {
          forms.push(...foundForms);
        }
      } catch (err) {
        // можеш записати помилки переходу
        console.warn(`❌ Failed to load: ${link}`);
      }
    }

    await browser.close();

    return new Response(JSON.stringify({ forms }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    await browser.close();
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
