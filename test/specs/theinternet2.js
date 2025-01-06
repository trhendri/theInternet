const page = require("../../page");
//test
describe("Login Page Tests", () => {
    it("Should verify login with valid credentials", async () => {});

    it("Should verify login with invalid credentials", async () => {});
});

//DROPDOWN TESTS

describe("Dropdown Tests", () => {
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
        await $('option[value="2"]').click();
        const firstSelection = await $(page.dropDownField).$("option:checked").getValue();
        console.log(firstSelection);
        await expect(firstSelection).toBe("2");

        //Select and verify second option change to 1
        await $(page.dropDownField).click();
        await $('option[value="1"]').click();
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
        const checkboxes = await $$('input[type="checkbox"]'); // Grabs both/all checkboxes
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
        await checkbox1.click();

        await expect(checkbox1).toBeSelected();
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
        await checkbox2.click();

        await expect(checkbox2).toBeSelected();
        await checkbox2.click();

        await expect(checkbox2).not.toBeSelected();
    });

    it("Verify both checkboxes can be selected simultaneously", async () => {
        const checkbox1 = await $$(page.checkbox1)[0];
        const checkbox2 = await $$(page.checkbox2)[1];
        await checkbox1.click();
        await checkbox2.click();
        await expect(checkbox1).toBeSelected();
        await expect(checkbox2).toBeSelected();
        
    });
});
