/*
const page = require("../../page");

describe("Upon Opening Page", () => {
    it("should confirm page and title", async () => {
        await browser.url("/");
        await expect(browser).toHaveUrl("https://the-internet.herokuapp.com/");
    });
    it("should confirm title", async () => {
        await browser.url("/");
        await expect(browser).toHaveTitle("The Internet");
    });
});

describe("Main Page", () => {
    it("Should Verify List items", async () => {
        await browser.url("/");
        const listExamples = await $$("ul>li"); //calls all the ul li elements multiple instead of first instance
        // await expect(listExamples).toBeElementsArrayOfSize(44); // figure out why it doesnt matter the number..?? answer: adding the > made it accurate.
        //consider for boundary analysis
        await expect(listExamples).toBeElementsArrayOfSize({ gte: 1 }); //greater than or equal to one
    });
});

describe("Login and Logout Application", () => {
    it("Should login to Heroku Internet App", async () => {
        const username = "tomsmith";
        const password = "SuperSecretpassword!";
        await page.loginApp(username, password);
        await browser.pause(5000);
        await expect(browser).toHaveUrl("https://the-internet.herokuapp.com/secure");
    });

    it("should logout and verify logout alert message", async () => {
        const btnLogout = await $('a[href="/logout"]');
        await btnLogout.click();
        const alertFlash = await $("#flash");
        //await expect(browser).toHaveUrl('https://the-internet.herokuapp.com/login');
        const getText = await alertFlash.getText();
        await expect(getText).toContain("logged out");
    });
});

describe("Add Element", () => {
    it("should add element", async () => {
        await page.addElement();
        const deleteButton = await $(page.deleteButton);
        await expect(deleteButton).toBeExisting();
    });
    it("should delete button", async () => {
        const deleteButton = await $(page.deleteButton);
        await page.deleteElement();
        await expect(deleteButton).not.toBePresent();
    });
});

describe("Open Dynamic Controls page", () => {
    it("should open the internet dynamic controls page", async () => {
        await browser.url("/dynamic_controls");
        await expect(browser).toHaveUrl("https://the-internet.herokuapp.com/dynamic_controls");
    });

    it("should open the dynamic loading page from the main page", async () => {
        await browser.url("/");
        const dynLoad = await $('a[href="/dynamic_loading"]');
        await dynLoad.click();
        await expect(browser).toHaveUrl("https://the-internet.herokuapp.com/dynamic_loading");
    });

    it("should open Dynamic Loading 1", async () => {
        const dynLoad1 = await $('a[href="/dynamic_loading/1"]');
        await dynLoad1.click();
        await expect(browser).toHaveUrl("https://the-internet.herokuapp.com/dynamic_loading/1");
    });

    it('should press start and wait for the "Hello World" hidden element to show', async () => {
        const startButton = await $("#start button");
        await startButton.click();
        const elLoading = await $("#loading");
        // await elLoading.waitForDisplayed();
        await elLoading.waitForDisplayed({ reverse: true });
        const textFinish = await $("#finish").getText();
        await expect(textFinish).toContain("Hello World!");
    });

    it("should open Dynamic Loading 2 and press start button", async () => {
        await browser.url("/dynamic_loading");

        const dynLoad2 = await $('a[href="/dynamic_loading/2"]');
        await dynLoad2.click();
        await expect(browser).toHaveUrl("https://the-internet.herokuapp.com/dynamic_loading/2");
        const startButton2 = await $("#start button");
        await startButton2.click();
        const elLoading2 = await $("#loading");
        await elLoading2.waitForDisplayed({ reverse: true });
        const textFinish2 = await $("#finish").getText();
        await expect(textFinish2).toContain("Hello World");
    });
});

describe("Checkbox Page", () => {
    it("should open checkbox page", async () => {
        await browser.url("/");
        const checkboxPage = await $('a[href="/checkboxes"]');
        await checkboxPage.click();
        await expect(browser).toHaveUrl("https://the-internet.herokuapp.com/checkboxes");
    });

    it("should select check box 1", async () => {
        const checkbox1 = await $('#checkboxes input[type="checkbox"]:first-of-type');
        await checkbox1.click();
        await expect(checkbox1).toBeChecked();
    });

    it("should deselect check box 1", async () => {
        const checkbox1 = await $('#checkboxes input[type="checkbox"]:first-of-type');
        await checkbox1.click();
        await expect(checkbox1).not.toBeChecked();
    });
});
*/

//import { Key } from 'webdriverio'
//Change to target instead of Amazon bc of constant captcha

describe("Target", () => {
    it("Check browser URL and Title", async () => {
        await browser.url("https://target.com");
        await expect(browser).toHaveUrl("https://www.target.com/");
        //await expect(browser).toHaveTitleContaining('Amazon.com');
    });

    /*
it.only('Check Jest is working with no errors', async() =>{
const four = 4;
const five = 5;
await console.log(four + five);
await expect(four + five).toBeLessThan(20);

}); 
*/

    it("Search Content and Verify Text", async () => {
        await browser.url("https://target.com");

        const searchText = await $('div[data-test="resultsHeading"]');

        const searchBox = await $('input[type="search"]');
        const searchButton = await $('button[type="submit"]');
        await searchBox.addValue("macbook");
        await searchButton.click();
        await searchText.waitForDisplayed();
        const confirmSearchText = await searchText.getText();

        await console.log(confirmSearchText);

        await expect(confirmSearchText).toContain("macbook");
    });

    //Auto Suggestion Practice

    it("should check autosuggest", async () => {
        await browser.url("https://www.target.com");
        const searchBox = await $('input[type="search"]');

        await searchBox.click();

        await browser.keys("ArrowDown");
        await browser.keys("ArrowDown");
        await browser.pause(1000);

        await browser.keys("Enter");

        //const afterSearchBox = await $('.gDYAEt"]');
        // await afterSearchBox.waitForDisplayed();

        const searchText = await $('div[data-test="resultsHeading"]');
        await searchText.waitForDisplayed();
        const confirmSearchText = await searchText.getText();

        await expect(confirmSearchText).toContain("wrapping paper");
//Be sure to try alternative methods to grab text in variables.
       
    });

   
});

//Verify the Add Cart Flow
// Before Hooks
//And hidden elements
/* 
Flow:
1. Enter Web Site
2. Search Macbook
3. Select First item
4. Get Price
5. Add to Cart
6. Verify Add to Cart text or Page
7. Verify Cart Subtotal


*/

describe.only('Add to Cart Flow', () => {

    // Why should we add a before block here instead of just using it in it block? does it run before every it block if there were multiple?
before(async () => {
    await browser.url('https://target.com');
    const searchBox = await $('input[type="search"]');
    const searchButton = await $('button[type="submit"]');
    await searchBox.addValue('macbook');
   await searchButton.click();
});

it('Add to Cart', async() => {

//find container to work with multiple nodes
// await $$('dafadsfa); to select all nodes
//await $$('dafadsfa)[0]; an array to select the first node
//await $('dafadsfa); just one dollar sign also selects the first item
const firstItem = await $('.sc-11955945-4.ccGlAs');
await firstItem.click();
const itemPrice = await $('.sc-e46aa7af-1.dCyLAs').getText();
const addToCartButton = await $('button[aria-label="Add to cart for Unlmited Cellular HardShell Case for Apple 12-inch MacBook - Black"]');
await addToCartButton.click();
const addCartModal = await $(".ReactModal__Content");
await addCartModal.waitForExist();
const addToCartConfirm = await $('span[class="h-text-lg"]').getText();
await expect(addToCartConfirm).toContain("Added to cart");
const viewCartButton = await $('div a[class="sc-ddc722c0-0 sc-3d5333d1-0 flfJAZ jaKlHa"]');
await viewCartButton.click();
const subtotal = await $('.sc-93ec7147-3.hNHMW').getText();
await expect(subtotal).toContain(itemPrice);





});

});