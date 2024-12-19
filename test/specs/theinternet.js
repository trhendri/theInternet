const page = require('../pageobjects/page');

describe('Open page', () => {
    it('should open the internet page', async () => {
        await browser.url('/');
        await browser.pause(5000);
        await expect (browser).toHaveUrl('https://the-internet.herokuapp.com/')
    })

})