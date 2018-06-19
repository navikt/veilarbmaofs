// tslint:disable
const run = require('./run');
const pre = require.resolve('./preHeroku');
const post = require.resolve('./postHeroku');
const buildScript = require.resolve('@nutgaard/react-scripts/scripts/build');
const serve = require.resolve('serve/bin/serve');
const puppeteer = require('puppeteer');

run(`node ${pre}`);
run(`node ${buildScript}`);
run(`node ${post}`);

const server = run.async(`node ${serve} -l 8080 build`);

function delay(delay) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(), delay);
    })
}

async function generatePlaceholder(page, nthChild) {
    await page.goto('http://localhost:8080');
    await page.click('.apne-lukke-knapp');
    await page.click(`.ekspanderbartPanel:nth-child(${nthChild})`);

    await delay(3000);

    const content = await page.$('.ekspanderbartPanel__innhold');
    const children = await content.$$('h2,p');
    const boxes = await Promise.all(children
        .map(async (child) => await child.boundingBox()));
    const parent = await content.boxModel();

    const placeholders = boxes
        .map((box) => `<rect x="${box.x - parent.content[0].x}" y="${box.y - parent.content[0].y}" rx="5" ry="5" width="${box.width}" height="${box.height - 6}" />`)
        .join('\n');

    console.log(placeholders); // tslint:disable-line
    console.log('width',parent.width); // tslint:disable-line
    console.log('height',parent.height); // tslint:disable-line
}


(async function runTest() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1200 });

    await generatePlaceholder(page, 1);
    await generatePlaceholder(page, 2);
    await generatePlaceholder(page, 3);

    await browser.close();
    server.kill('SIGINT');
})();
