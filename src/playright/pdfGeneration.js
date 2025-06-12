const fs = require('fs').promises;
const path = require('path');

const TOKEN = '2STyRUR9lF5qUyR618c17cc3248f4aff719b37df637aecc94';

const url = `https://production-sfo.browserless.io/pdf?token=${TOKEN}`;
const headers = {
  'Cache-Control': 'no-cache',
  'Content-Type': 'application/json',
};

const data = {
  url: 'https://docs.browserless.io/rest-apis/intro',
  options: {
    displayHeaderFooter: true,
    printBackground: false,
    format: 'A0',
  },
  waitForSelector: {
    selector: 'h1',
    timeout: 5000,
  },
};

const generatePDF = async () => {
  const response = await fetch(url, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(data),
  });

  const pdfBuffer = await response.arrayBuffer();
  await fs.writeFile('website.pdf', Buffer.from(pdfBuffer));
  console.log('PDF saved as website.pdf');
};

generatePDF();
