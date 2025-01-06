module.exports = {
    // Title Page
    dropDownPage: '//a[contains(text(), "Dropdown")]', //Xpath selector
    //dropDown2: 'a[href="/dropdown"]', //CSS Selector
    dropDownField: "#dropdown",
    //Inputs
    flashAlert: ".success",
    usernameField: "#username",
    passwordField: "#password",

    //Buttons
    loginButton: 'button[type="submit"]',
    addElementButton: "button=Add Element",
    deleteButton: ".added-manually",

    //Functions

    loginApp: async function (username, password) {
        await browser.url("/login");
        const usernameField = await $(this.usernameField);
        await usernameField.setValue("tomsmith");
        const passwordField = await $(this.passwordField);
        await passwordField.setValue("SuperSecretPassword!");
        const loginButton = await $(this.loginButton);
        await loginButton.click();
    },

    addElement: async function () {
        await browser.url("/add_remove_elements/");
        const addElementButton = await $(this.addElementButton);
        await addElementButton.click();
    },

    deleteElement: async function () {
        await $(this.deleteButton).click();
    },

    //logoutPage:
};
