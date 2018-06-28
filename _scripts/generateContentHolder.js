// tslint:disable
const path = require('path');
const fs = require('fs');
const run = require('./run');
const pre = require.resolve('./preHeroku');
const post = require.resolve('./postHeroku');
const buildScript = require.resolve('@nutgaard/react-scripts/scripts/build');
const serve = require.resolve('serve/bin/serve');

let puppeteer;
try {
    puppeteer = require('puppeteer');
} catch (e) {
    console.log('Fant ikke puppeteer. Innstallerer uten endring til package.json.');
    run('npm install puppeteer --no-save');

    puppeteer = require('puppeteer');
}

const config = [
    require.resolve('./../src/app/visningskomponenter/cv/cv.tsx'),
    require.resolve('./../src/app/visningskomponenter/jobbonsker/jobbonsker.tsx'),
    require.resolve('./../src/app/visningskomponenter/personalia/personalia.tsx'),
    require.resolve('./../src/app/visningskomponenter/ytelser/ytelsevisning.tsx'),
    require.resolve('./../src/app/visningskomponenter/oppfolging/oppfolging.tsx'),
    require.resolve('./../src/app/visningskomponenter/jobbsokerkompetanse/jobbsokerkompetanse.tsx')
].map((dir) => path.dirname(dir));

const placeholderTemplate = fs.readFileSync('./_scripts/placeholder.template', 'utf-8');
function template(tmp, values) {
    return tmp.replace(/\{\{(\w+)\}\}/g, (_, capture) => {
        return values[capture];
    });
}

process.env.REACT_APP_MOCK='true';
run(`node ${pre}`);
run(`node ${buildScript}`);
run(`node ${post}`);

const server = run.async(`node ${serve} -l 8080 build`);

function delay(delay) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(), delay);
    })
}

async function generatePlaceholderForContent(page, nthChild, saveTo) {
    console.log('generationg', saveTo);
    await page.goto('http://localhost:8080');
    await delay(3000);
    await page.click('.apne-lukke-knapp');
    await delay(1000);
    await page.click(`.ekspanderbartPanel:nth-child(${nthChild})`);

    await delay(3000);

    const content = await page.$('.ekspanderbartPanel__innhold');
    const children = await content.$$('h1,h2,h3,h4,h5,h6,p,span,img');
    const boxes = await Promise.all(children
        .map(async (child) => await child.boundingBox()));
    const parent = await content.boxModel();

    const placeholders = boxes
        .map((box) => `            <rect x="${box.x - parent.content[0].x}" y="${box.y - parent.content[0].y}" rx="5" ry="5" width="${box.width}" height="${box.height - 6}" />`)
        .join('\n');

    console.log(placeholders); // tslint:disable-line
    console.log('width',parent.width); // tslint:disable-line
    console.log('height',parent.height); // tslint:disable-line

    const placeholder = template(placeholderTemplate, {
       width: parent.width,
       height: parent.height,
       content: placeholders
    });

    console.log('placeholder',placeholder);

    fs.writeFileSync(path.join(saveTo, 'placeholder.tsx'), placeholder, 'utf-8');
}

async function generatePlacholderForPerson(page) {
    await delay(5000);
    await page.goto('http://localhost:8080');
    await delay(2000);

    const content = await page.$('.persondetaljer.lukket');
    const children = await content.$$('h1,h2,h3,h4,h5,h6,p,span,img');
    const boxes = await Promise.all(children
        .map(async (child) => await child.boundingBox()));
    const parent = await content.boxModel();

    const placeholders = boxes
        .map((box) => `            <rect x="${box.x - parent.content[0].x}" y="${box.y - parent.content[0].y}" rx="5" ry="5" width="${box.width}" height="${box.height - 6}" />`)
        .join('\n');

    console.log('placeholders',placeholders);
    console.log('width',parent.width); // tslint:disable-line
    console.log('height',parent.height); // tslint:disable-line
}


(async function runTest() {
    await delay(5000);
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1200 });

    for (let i = 0; i < config.length; i++) {
        await generatePlaceholderForContent(page, i + 1, config[i]);
    }

    //await generatePlacholderForPerson(page);
    
    await browser.close();
    server.kill('SIGINT');
})();
