const page = require("../../page");
//test
describe("Login Page Tests", () => {
    it("Should verify login with valid credentials", async () => {});

    it("Should verify login with invalid credentials", async () => {});
});

describe("Drop Down Tests", () => {
    it('Should verify selecting "Option 1" from dropdown', async () => {
        await browser.url("/");
        await $(page.dropDownPage).click();
        await $(page.dropDownField).click();
        await $('option[value="1"]').click();
        const value = await $(page.dropDownField).getValue();
        console.log(value);
        await expect(value).toBe("1");
    });

    it('Should verify selecting "Option 2" from dropdown', async () => {
        await browser.url("/");
        await $(page.dropDownPage).click();
        await $(page.dropDownField).click();
        await $('option[value="2"]').click();
        const value = await $(page.dropDownField).getValue();
        console.log(value);
        await expect(value).toBe("2");
    });

    it('Verify dropdown defaults to "Please select an option."', async () => {
        await browser.url("/");
        await $(page.dropDownPage).click();
        //Alternative to check option that is selected using option: checked
        const defaultOption = await $(page.dropDownField).$('option:checked').getText();
        console.log(defaultOption);
        await expect(defaultOption).toBe("Please select an option");
    });

    
    it.only('Verify dropdown selection can be changed', async () => {
       //Verify default option
        await browser.url("/");
        await $(page.dropDownPage).click();
        const defaultOption = await $(page.dropDownField).$('option:checked').getText();
        console.log(defaultOption);
        await expect(defaultOption).toBe('Please select an option');

        //Select and verify first option chage to 2
        await $(page.dropDownField).click();
        await $('option[value="2"]').click();
        const firstSelection = await $(page.dropDownField).$('option:checked').getValue();
        console.log(firstSelection);
        await expect(firstSelection).toBe("2");

        //Select and verify second option change to 1
        await $(page.dropDownField).click();
        await $('option[value="1"]').click();
        const secondSelection =await $(page.dropDownField).$('option:checked').getValue();
        console.log(secondSelection);
        await expect(secondSelection).toBe("1");
    });
});
