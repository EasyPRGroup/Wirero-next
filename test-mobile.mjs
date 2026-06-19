import { createRequire } from 'module';
const require = createRequire(import.meta.url);

// Use Chrome from Puppeteer cache
const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

// Use puppeteer-core from agent-browser's bundled deps
let puppeteer;
try {
  puppeteer = require('puppeteer-core');
} catch(e) {
  console.log('puppeteer-core not available, trying alternative...');
  process.exit(1);
}

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    executablePath: chromePath,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 3, isMobile: true, hasTouch: true });
  
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle2', timeout: 30000 });
  
  // Check for horizontal overflow at 390px
  const metrics = await page.evaluate(() => {
    const doc = document.documentElement;
    const body = document.body;
    const allElements = document.querySelectorAll('*');
    let maxRight = 0;
    let overflowEl = null;
    for (const el of allElements) {
      const rect = el.getBoundingClientRect();
      const style = window.getComputedStyle(el);
      if (rect.right > maxRight && rect.width > 0 && style.display !== 'none' && style.visibility !== 'hidden') {
        maxRight = rect.right;
        overflowEl = el.tagName + '.' + (el.className || '').substring(0, 100);
      }
    }
    return {
      viewportWidth: window.innerWidth,
      viewportHeight: window.innerHeight,
      scrollWidth: doc.scrollWidth,
      bodyOffsetWidth: body.offsetWidth,
      hasOverflow: doc.scrollWidth > window.innerWidth + 1,
      maxRight: maxRight,
      overflowElement: overflowEl
    };
  });
  
  console.log('=== 390x844 Viewport Check ===');
  console.log(JSON.stringify(metrics, null, 2));
  
  // Check each section for overflow
  const sections = await page.evaluate(() => {
    const results = [];
    const sections = document.querySelectorAll('section, main, footer, header');
    for (const s of sections) {
      const rect = s.getBoundingClientRect();
      const style = window.getComputedStyle(s);
      if (rect.width > 0 && style.display !== 'none') {
        results.push({
          tag: s.tagName,
          classes: (s.className || '').substring(0, 80),
          width: Math.round(rect.width),
          left: Math.round(rect.left),
          right: Math.round(rect.right),
          overflows: Math.round(rect.right) > 390
        });
      }
    }
    return results;
  });
  
  console.log('\n=== Section Dimensions at 390px ===');
  for (const s of sections) {
    if (s.overflows) {
      console.log(`OVERFLOW: ${s.tag} right=${s.right}px classes="${s.classes}"`);
    }
  }
  
  // Screenshot
  await page.screenshot({ path: 'mobile-390-full.png', fullPage: true });
  console.log('\nScreenshot saved: mobile-390-full.png');
  
  // Also test at 360x800, 412x915, 768px, 1440px
  const viewports = [
    { w: 360, h: 800, name: '360x800' },
    { w: 412, h: 915, name: '412x915' },
    { w: 768, h: 1024, name: '768x1024' },
    { w: 1440, h: 900, name: '1440x900' }
  ];
  
  for (const vp of viewports) {
    await page.setViewport({ width: vp.w, height: vp.h, deviceScaleFactor: vp.w >= 768 ? 1 : 2, isMobile: vp.w < 768, hasTouch: vp.w < 768 });
    await page.waitForTimeout(500);
    const m = await page.evaluate(() => ({
      vw: window.innerWidth,
      scrollW: document.documentElement.scrollWidth,
      hasOverflow: document.documentElement.scrollWidth > window.innerWidth + 1
    }));
    console.log(`\n${vp.name}: viewport=${m.vw}px scrollWidth=${m.scrollW}px overflow=${m.hasOverflow}`);
  }
  
  await browser.close();
})();
