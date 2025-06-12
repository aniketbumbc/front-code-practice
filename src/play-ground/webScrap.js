const fs = require('fs');

const TOKEN = '2STyRUR9lF5qUyR618c17cc3248f4aff719b37df637aecc94';

const url = `https://production-sfo.browserless.io/scrape?token=${TOKEN}`;
const headers = {
  'Cache-Control': 'no-cache',
  'Content-Type': 'application/json',
};

const data = {
  url: 'https://browserless.io/',
  elements: [{ selector: 'h1' }],
};

const scrapeContent = async () => {
  const response = await fetch(url, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(data),
  });

  const result = await response.json();
  console.log(result);
  fs.writeFileSync('./result.json', JSON.stringify(result, null, 2)); // Save with formatting
};

scrapeContent();
