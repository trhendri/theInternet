module.exports = {
    // Title Page
    dropDownPage: '//a[contains(text(), "Dropdown")]', //Xpath selector
    //dropDown2: 'a[href="/dropdown"]', //CSS Selector
    dropDownField: "#dropdown",

    //Buttons

    addElementButton: "button=Add Element",
    deleteButton: ".added-manually",

    //Checkboxes Page
    checkboxesPage: '//a[contains(text(), "Checkboxes")]',
    checkbox1: 'input[type="checkbox"]',
    checkbox2: 'input[type="checkbox"]',

    //Login Page
        //Inputs
        flashAlert: ".success",
        usernameField: "#username",
        passwordField: "#password",
        //Buttons
        loginButton: 'button[type="submit"]',

    //File Upload Page
    fileUploadPage: '//a[contains(text(), "File Upload")]',

    //Functions

    loginApp: async function (username, password) {
        const usernameField = await $(this.usernameField);
        await usernameField.setValue(username);
        const passwordField = await $(this.passwordField);
        await passwordField.setValue(password);
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


    //fileUpload:
};
