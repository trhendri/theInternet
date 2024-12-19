const page = require('../../page');

describe('Log into Page', () => {
    it('Should log in to Heroku Internet App', async () => {
       await page.loginApp();
        await browser.pause(5000);
        await expect(browser).toHaveUrl('https://the-internet.herokuapp.com/secure');

});

});


describe('Open page', () => {
    it('should open the internet dynamic controls page', async () => {
        await browser.url('/dynamic_controls');
        await browser.pause(2000);
        await expect (browser).toHaveUrl('https://the-internet.herokuapp.com/dynamic_controls')
    })

})
    