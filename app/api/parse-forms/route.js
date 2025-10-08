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

    // Збір внутрішніх лінків
    const internalLinks = await page.$$eval('a[href], form[action], script[src], link[href], img[src]', elements => {
      const links = [];

      // Для <a href>
      elements.forEach(el => {
        const href = el.getAttribute('href');
        if (href && href.startsWith(window.location.origin)) {
          links.push(href);
        }
      });

      // Для <form action>
      elements.forEach(el => {
        const action = el.getAttribute('action');
        if (action && action.startsWith(window.location.origin)) {
          links.push(action);
        }
      });

      // Для <script src> та <link href>
      elements.forEach(el => {
        const src = el.getAttribute('src') || el.getAttribute('href');
        if (src && src.startsWith(window.location.origin)) {
          links.push(src);
        }
      });

      // Для <img src>
      elements.forEach(el => {
        const src = el.getAttribute('src');
        if (src && src.startsWith(window.location.origin)) {
          links.push(src);
        }
      });

      return links;
    });

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
