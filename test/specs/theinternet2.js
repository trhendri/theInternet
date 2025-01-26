const page = require("../../page");
const path = require("path"); // Need to learn the differences here.
//import path from 'node:path';
import { Key } from "webdriverio";

//xit and xdescribe to skip tests and it.only and describe.only to target specific test

describe("Login Page Tests", () => {
    beforeEach(async () => {
        await browser.url("/login");
    });

    it("Should verify login with valid credentials", async () => {
        const validUsername = page.validUsername;
        const validPassword = page.validPassword;
        await page.loginApp(validUsername, validPassword);
        const flashAlert = await $(page.flashAlert).getText();
        console.log(flashAlert);
        console.log("test");

        await expect(flashAlert).toContain("You logged into a secure area!");
    });

    /* it("Should verify login with invalid credentials", async () => {
        const username = "tomsmithy";
        const password = "SuperSecretpassword!";
        await page.loginApp(username, password);
        await browser.pause(5000);
        await expect(browser).not.toHaveUrl("https://the-internet.herokuapp.com/secure");
        const getText = await alertFlash.getText();
    });
    */
    it("Verify login fails with blank username", async () => {
        const blankUsername = page.blankUsername;
        const validPassword = page.validPassword;
        await page.loginApp(blankUsername, validPassword);
        const flashAlertFail = await $(page.flashAlertFail).getText();
        console.log(flashAlertFail);
        console.log("test");

        await expect(flashAlertFail).toContain("Your username is invalid!");
    });

    it("Verify login fails with blank password", async () => {
        const validUsername = page.validUsername;
        const blankPassword = page.blankPassword;
        await page.loginApp(validUsername, blankPassword);
        const flashAlertFail = await $(page.flashAlertFail).getText();
        console.log(flashAlertFail);
        console.log("test");

        await expect(flashAlertFail).toContain("Your password is invalid!");
    });

    it("Verify login fails with both fields blank", async () => {
        const blankUsername = page.blankUsername;
        const blankPassword = page.blankPassword;
        await page.loginApp(blankUsername, blankPassword);
        const flashAlertFail = await $(page.flashAlertFail).getText();
        console.log(flashAlertFail);
        console.log("test");

        await expect(flashAlertFail).toContain("Your username is invalid!");
    });

    it("Verify login session persists after page refresh", async () => {
        const validUsername = page.validUsername;
        const validPassword = page.validPassword;
        await page.loginApp(validUsername, validPassword);
        const flashAlert = await $(page.flashAlert).getText();
        console.log(flashAlert);
        console.log("test");

        await expect(flashAlert).toContain("You logged into a secure area!");
        await browser.pause(1000);
        await browser.refresh();
        await browser.pause(2000);
        await expect(browser).toHaveUrl("https://the-internet.herokuapp.com/secure");
    });
});

//DROPDOWN TESTS

describe("Dropdown Tests", () => {
    it('Should verify selecting "Option 1" from dropdown', async () => {
        await browser.url("/");
        await $(page.dropDownPage).click();
        await $(page.dropDownField).click();
        await $(page.dropDown1).click();
        const value = await $(page.dropDownField).getValue();
        console.log(value);
        await expect(value).toBe("1");
    });

    it('Should verify selecting "Option 2" from dropdown', async () => {
        await browser.url("/");
        await $(page.dropDownPage).click();
        await $(page.dropDownField).click();
        await $(page.dropDown2).click();
        const value = await $(page.dropDownField).getValue();
        console.log(value);
        await expect(value).toBe("2");
    });

    it('Verify dropdown defaults to "Please select an option."', async () => {
        await browser.url("/");
        await $(page.dropDownPage).click();
        //Alternative to check option that is selected using option: checked
        const defaultOption = await $(page.dropDownField).$("option:checked").getText();
        console.log(defaultOption);
        await expect(defaultOption).toBe("Please select an option");
    });

    it("Verify dropdown selection can be changed", async () => {
        //Verify default option
        await browser.url("/");
        await $(page.dropDownPage).click();
        const defaultOption = await $(page.dropDownField).$("option:checked").getText();
        console.log(defaultOption);
        await expect(defaultOption).toBe("Please select an option");

        //Select and verify first option chage to 2
        await $(page.dropDownField).click();
        await $(page.dropDown2).click();
        const firstSelection = await $(page.dropDownField).$("option:checked").getValue();
        console.log(firstSelection);
        await expect(firstSelection).toBe("2");

        //Select and verify second option change to 1
        await $(page.dropDownField).click();
        await $(page.dropDown1).click();
        const secondSelection = await $(page.dropDownField).$("option:checked").getValue();
        console.log(secondSelection);
        await expect(secondSelection).toBe("1");
    });
});

//CHECKBOX TESTS

describe("Checkbox Tests", () => {
    //Runs before each test - Can help with redundacies
    // opens browser, clicks checkboxes link, and clears checkboxes if any are selected upon page open
    //Q: But does this work independently if i added it.only to one?
    //A: Yes, this will run before each test - each it block-  by default.
    beforeEach(async () => {
        await browser.url("/");
        await $(page.checkboxesPage).click();

        //Clear already selected checkboxes
        const checkboxes = await $$(page.checkboxes); // Grabs both/all checkboxes
        for (const checkbox of checkboxes) {
            //For Loop. each checkbox in/of checkboxes array will be named "checkbox"
            if (await checkbox.isSelected()) {
                //Loops for already selected/clicked checkbox
                await checkbox.click(); // Clicks said selected checkbox to clear
            }
        }
    });

    it("Verify checkbox 1 can be checked", async () => {
        const checkbox1 = await $$(page.checkbox1)[0];
        await checkbox1.click();
        await expect(checkbox1).toBeSelected();
    });

    it("Verify checkbox 1 can be unchecked", async () => {
        const checkbox1 = await $$(page.checkbox1)[0];
        //Check checkbox 1
        await checkbox1.click();
        await expect(checkbox1).toBeSelected();
        //Check checkbox 2
        await checkbox1.click();
        await expect(checkbox1).not.toBeSelected();
    });

    it("Verify checkbox 2 can be checked", async () => {
        const checkbox2 = await $$(page.checkbox2)[1];
        await checkbox2.click();
        await expect(checkbox2).toBeSelected();
    });

    it("Verify checkbox 2 can be unchecked", async () => {
        const checkbox2 = await $$(page.checkbox2)[0];
        //Check checkbox 2
        await checkbox2.click();
        await expect(checkbox2).toBeSelected();
        //Uncheck check box 2
        await checkbox2.click();
        await expect(checkbox2).not.toBeSelected();
    });

    it("Verify both checkboxes can be selected simultaneously", async () => {
        const checkbox1 = await $$(page.checkbox1)[0];
        const checkbox2 = await $$(page.checkbox2)[1];
        //Check First Checkbox
        await checkbox1.click();
        //Check Second Checkbox
        await checkbox2.click();
        await expect(checkbox1).toBeSelected();
        await expect(checkbox2).toBeSelected();
    });
});

//File Upload Tests

describe("File Upload Tests", () => {
    beforeEach(async () => {
        await browser.url("/");
        await $(page.fileUploadPage).click();
    });

    it("Verify successful file upload with valid file", async () => {
        //import path from 'node:path'; //Using ES6 import syntax
        //const path = require("path"); //Using commonJS require syntax,  added to to, and  Need to learn the differences here.

        const filePath = path.join(__dirname, "../images/wdiorobot.jpg"); // optional: Correct Path: Using path.join(__dirname, 'test', 'Images', 'wdiorobot.jpg') ensures the file path is constructed correctly, considering the current directory (__dirname).
        // const filePath = "test/Images/wdiorobot.jpg"; //useing file path, be sure to change to forward slash.

        const remoteFilePath = await browser.uploadFile(filePath);
        const uploadFile = await $(page.uploadFile);
        const submitFile = await $(page.submitFile);

        await $(uploadFile).setValue(remoteFilePath);

        await $(submitFile).click();

        const successfulUpload = await $(page.successfulUpload);

        await expect(successfulUpload).toHaveText("File Uploaded!");

        //Main concepts, file navigations, forward and backslashes, __dirname, path.join, and import vs const path = require.
        //Also using toHaveText vs toBe.
    });

    it("Verify upload fails with unsupported file types", async () => {
        //Perhaps do more thorough testing to find which files are unsupported.
        //Should be expected to fail - find unsupported file
        const filePath = path.join(__dirname, "../Audio/Doobly Doo.mp3");
        const remoteFilePath = await browser.uploadFile(filePath);
        const uploadFile = await $(page.uploadFile);
        const submitFile = await $(page.submitFile);

        await $(uploadFile).setValue(remoteFilePath);

        await $(submitFile).click();

        const successfulUpload = await $(".example>h3");

        await expect(successfulUpload).not.toHaveText("File Uploaded!");
    });

    it("Verify error message for no file selected", async () => {
        //Expect to fail bc there is not an error message
        const submitFile = await $(page.submitFile);

        await $(submitFile).click();

        const errorText = await $(page.errorText);
        console.log(errorText);
        await expect(errorText).toHaveText("Internal Server Error");
    });

    it("Verify uploaded file name is displayed", async () => {
        const filePath = path.join(__dirname, "../images/wdiorobot.jpg"); // optional: Correct Path: Using path.join(__dirname, 'test', 'Images', 'wdiorobot.jpg') ensures the file path is constructed correctly, considering the current directory (__dirname).
        // const filePath = "test/Images/wdiorobot.jpg"; //useing file path, be sure to change to forward slash.

        const remoteFilePath = await browser.uploadFile(filePath);
        const uploadFile = await $(page.uploadFile);
        const submitFile = await $(page.submitFile);

        await $(uploadFile).setValue(remoteFilePath);
        await $(submitFile).click();
        const successfulUpload = await $(page.successfulUpload);
        await successfulUpload.waitForDisplayed();
        const filename = await $(page.fileName).getText();
        await expect(successfulUpload).toHaveText("File Uploaded!");
        await expect(filename).toBe("wdiorobot.jpg");
    });
});

//Dyanimic Loading Tests
describe("Dynamic Loading Tests", () => {
    beforeEach(async () => {
        await browser.url("/");
        await $(page.dynamicLoadingPage).click();
        await $(page.dynamicLoadingEx1).click();
    });

    it('Verify the dynamic loading message is not visible before clicking "Start"', async () => {
        const loadingBar = await $(page.loadingBar);
        await expect(loadingBar).not.toBeDisplayed();
    });

    it("Verify the loading spinner appears after clicking 'Start.'", async () => {
        const loadingBar = await $(page.loadingBar);
        const startLoadButton = await $(page.startLoadButton);
        await startLoadButton.click();
        await expect(loadingBar).not.toHaveAttribute("style", "display: none");
    });
    //this one is iffy, should prob use .waitUntil
    xit("Verify the hidden element becomes visible after loading completes", async () => {
        let loadingBar = await $(page.loadingBar);
        const startLoadButton = await $(page.startLoadButton);
        const hiddenContent = await $(page.hiddenContent);
        await expect(hiddenContent).toHaveAttribute("style", "display:none");
        await startLoadButton.click();
        await expect(hiddenContent).toHaveAttribute("style", "display:none");
        await expect(loadingBar).not.toHaveAttribute("style", "display: none");
        await browser.pause(7000);

        loadingBar = await $(page.loadingBar);
        await expect(loadingBar).toHaveAttribute("style", "display: none");
        await expect(hiddenContent).not.toHaveAttribute("style", "display: none");
    });
});

//Add/Remove Elements Tests
describe("Add/Remove Elements Test", () => {
    beforeEach(async () => {
        await browser.url("/");
        await $(page.addRemoveElementsPage).click();
    });
    it("Verify elements can be added dynamically", async () => {
        await $(page.addElementButton).click();

        const elementChildren = await $$(page.elementChildren);
        console.log(elementChildren.length);
        await expect(elementChildren.length).toBeGreaterThan(0); //targeting the existance of any number of child elements of #elements using #elements > *
    });

    it("Verify elements can be removed dynamically", async () => {
        const addElementButton = await $(page.addElementButton);
        await addElementButton.click();
        const elementChildren = $$(page.elementChildren)[0];
        await elementChildren.click();
        await expect(elementChildren).not.toExist(); //toBePresent is the same as toExist
    });

    it("Verify removing all added elements", async () => {
        //Ideally, i want to delete each added element, no matter how many and confirm its deleted
        await $(page.addElementButton).click();
        await $(page.addElementButton).click();

        //Clear already selected checkboxes
        let elementChildren = await $$(page.elementChildren); // Grabs all children elements
        for (const childrenToDelete of elementChildren) {
            //For Loop. each chlid element will be named childrenToDelete
            if (await childrenToDelete.isExisting) {
                //Loops through each existing child element
                await childrenToDelete.click(); // Clicks child element to delete
            }
        }
        elementChildren = await $$(page.elementChildren); /// grabs the new value
        await expect(elementChildren.length).toBe(0); //toExit or not.toExist is used for indiviual elements notarray. so use .length and .toBe(0)
    });
});

//Hover Test cases

describe("Hovers Tests", () => {
    beforeEach(async () => {
        await browser.url("/");
        await $(page.hoverPage).click();
    });

    it("Verify that clicking the 'View profile' link navigates to the correct user profile page", async () => {
        //Goal:
        //1. Loop through each profile
        //2. Click its associated view profile link
        //3. Somewhow grab the profile info and cross ref with url to get assert
        let profileImages = await $$(page.profileImages);

        for (const user of profileImages) {
            await user.moveTo();
            const profileName = await user.$(page.profileName).getText(); // get profile name

            console.log(profileName);
            const profileNameLastNumber = profileName.charAt(profileName.length - 1); //grab last char of profile name
            console.log(profileNameLastNumber);

            const viewProfileLink = await user.$("a"); //target link associated with current element. can target using //a contrains "view profile"

            await viewProfileLink.click();
            await browser.pause(2000);

            await expect(browser).toHaveUrl("https://the-internet.herokuapp.com/users/" + profileNameLastNumber); //append that last character to url to confirm url

            await browser.back();
            await browser.refresh(); //after troubleshooting, this was only way to continue loop to second view profile link

            profileImages = await $$(page.profileImages);
            //await expect(browser).toHaveUrlContaining()
        }
    });

    it("Verify that all images respond consistently to hover with visual effects or tooltips", async () => {
        //Goal
        //1. Loop over all profiles
        //2. Confirm that tool hover change appears
        let profileImages = await $$(page.profileImages);

        for (const user of profileImages) {
            await user.moveTo();

            const caption = await user.$(page.caption);
            const captionText = await caption.getText();
            console.log(captionText);
            await caption.waitForDisplayed();
            await expect(caption).toBeDisplayed();
        }
    });
});

//Text Editor Test Cases
//getCssProperty could help with this
