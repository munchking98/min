const puppeteer = require('puppeteer');

const macroStart = async (pepiId, pepiPwd) => {
  const browser = await puppeteer.launch({ headless: false });

  //   const browser = await puppeteer.launch();
  const page = await browser.newPage();
  page.setViewport({ width: 1920, height: 1080 });
  await page.goto(
    'https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=%EC%95%84%ED%82%A4%EC%97%90%EC%9D%B4%EC%A7%80',
  );
  await page.click('a[href="https://archeage.xlgames.com"]');

  await page.waitFor(3000);
  const lo = await page.goto('.btn-portal-login');
  await page.waitFor(3000);

  await page.evaluate(
    (id, pw) => {
      document.querySelector('#id_field').value = id;
      document.querySelector('#pw_field').value = pw;
    },
    pepiId,
    pepiPwd,
  );
  await page.waitFor(3000);
  await page.click('.btn-login-form');

  await page.waitFor(2000);
  await page.click('.company-site');

  await page.waitFor(2000);
  await page.click('.wing-banner');

  await page.waitFor(2000);
  const frame = page.frames().find((frame) => frame.name() === 'eventFrame');
  await frame.click('.link-gift');
  // await page.screenshot({ path: 'arche.png', fullPage: true });
  await browser.close();
};

module.exports = { macroStart };
