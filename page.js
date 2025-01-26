module.exports = {
    // Title Page

    //Drop Down Page
    dropDownPage: '//a[contains(text(), "Dropdown")]', //Xpath selector
    //dropDown2: 'a[href="/dropdown"]', //CSS Selector
    dropDownField: "#dropdown",
    dropDown1: 'option[value="1"]',
    dropDown2: 'option[value="2"]',

    //Add/Remove Elements Page
    addRemoveElementsPage: '//a[contains(text(), "Add/Remove Elements")]',

    addElementButton: "button=Add Element",
    elementChildren: "#elements > *",

    //Checkboxes Page
    checkboxesPage: '//a[contains(text(), "Checkboxes")]',
    checkbox1: 'input[type="checkbox"]',
    checkbox2: 'input[type="checkbox"]',
    checkboxes: 'input[type="checkbox"]',

    //Login Page
    //Test Data
    validUsername: "tomsmith",
    invalidUsername: "tomesmithy",
    validPassword: "SuperSecretPassword!",
    invalidPassword: "SuperSecret",
    blankUsername: "",
    blankPassword: "",

    //Inputs
    flashAlert: ".success",
    flashAlertFail: ".error",
    usernameField: "#username",
    passwordField: "#password",

    //Buttons
    loginButton: 'button[type="submit"]',

    //File Upload Page
    fileUploadPage: '//a[contains(text(), "File Upload")]',
    uploadFile: "#file-upload",
    submitFile: "#file-submit",
    successfulUpload: ".example>h3",
    fileName: "#uploaded-files",
    errorText: "h1",

    //Dyanic Loading page
    dynamicLoadingPage: '//a[contains(text(), "Dynamic Loading")]',
    dynamicLoadingEx1: '//a[contains(text(), "hidden")]',
    loadingBar: "#loading > img",
    startLoadButton: "button=Start", // '//button[text()="Start"]',
    hiddenContent: "#finish",

    //Hovers
    hoverPage: '//a[contains(text(), "Hovers")]',
    profileImages: ".example > .figure",
    caption: ".figcaption>h5",
    profileName: "h5",

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
