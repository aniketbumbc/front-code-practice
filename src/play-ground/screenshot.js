const { chromium } = require('playwright');
const fs = require('fs').promises;
const path = require('path');

// (async () => {
//   const browser = await chromium.launch();
//   const context = await browser.newContext({
//     viewport: { width: 1280, height: 1020 },
//   });
//   const page = await context.newPage();

//   await page.goto('https://www.aniketbdev.com/', { waitUntil: 'networkidle' });

//   // Wait for animations to finish
//   await page.waitForTimeout(2000); // or waitForSelector

//   // Disable animations
//   await page.addStyleTag({
//     content: `
//       * {
//         animation: none !important;
//         transition: none !important;
//       }
//     `,
//   });

//   // Take full-page screenshot
//   await page.screenshot({ path: 'example-1.png', fullPage: true });

//   await browser.close();
// })();

const TOKEN = '';

const headers = {
  'Cache-Control': 'no-cache',
  'Content-Type': 'application/json',
};

(async () => {
  const response = await fetch(
    `https://production-sfo.browserless.io/screenshot?token=${TOKEN}`,
    {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({
        url: 'https://www.google.com/',
      }),
    }
  );

  const imageBuffer = await response.arrayBuffer();
  console.log('Screenshot received! Size:', imageBuffer.byteLength);
  const filePath = path.join(__dirname, 'image-browserless.jpg');
  await fs.writeFile(filePath, Buffer.from(imageBuffer));
  console.log('JPEG saved to', filePath);
})();
