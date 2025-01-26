const page = require("../../page");

//Just ref: Currently theinternet2.js in use.






/*
// The internet ONE
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




 

