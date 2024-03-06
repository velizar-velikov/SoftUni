import { chromium } from 'playwright-chromium';
import { assert } from 'chai';

describe('Accordion test', async function () {

    let browser;
    let page;

    before(async () => {
        browser = await chromium.launch();
    });
    after(async () => {
        browser.close();
    });

    beforeEach(async () => {
        page = await browser.newPage();
    });
    afterEach(async () => {
        page.close();
    });

    it('Should load all articles', async function () {

        this.timeout = 5000;
        page.goto('http://127.0.0.1:5500/index.html');

        assert.equal(await page.isVisible('.head'), true);

    });

    it('All articles should be with correct titles', async function () {

        this.timeout = 5000;
        page.goto('http://127.0.0.1:5500/index.html');

        assert.equal(await page.textContent('.accordion:nth-child(1) .head span'), 'Scalable Vector Graphics');
        assert.equal(await page.textContent('.accordion:nth-child(2) .head span'), 'Open standard');
        assert.equal(await page.textContent('.accordion:nth-child(3) .head span'), 'Unix');
        assert.equal(await page.textContent('.accordion:nth-child(4) .head span'), 'ALGOL');
    })
})