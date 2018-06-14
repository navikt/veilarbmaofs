// tslint:disable
const run = require('./run');
const pre = require.resolve('./preHeroku');
const post = require.resolve('./postHeroku');
const buildScript = require.resolve('@nutgaard/react-scripts/scripts/build');
const serve = require.resolve('serve/bin/serve');
const puppeteer = require('puppeteer');

// run(`node ${pre}`);
// run(`node ${buildScript}`);
// run(`node ${post}`);

const server = run.async(`node ${serve} -l 8080 build`);

function delay(delay) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(), delay);
    })
}

(async function runTest() {
    const browser = await puppeteer.launch({ headless: false,  args: ['--shm-size 1gb'] });
    const page = await browser.newPage();
    await page.goto('http://localhost:8080');
    await page.click('.apne-lukke-knapp');
    await page.click('.ekspanderbartPanel:nth-child(2)');
    await delay(1000);
    await page.screenshot({path: 'example.png'});
    const content = await page.$('.ekspanderbartPanel__innhold');
    const children = await content.$$('div');
    const boxes = await Promise.all(children
        .map(async (child) => await child.boundingBox()));
    console.log('count', boxes); // tslint:disable-line


    await browser.close();
    server.kill('SIGINT');
})();
