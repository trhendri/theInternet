module.exports = {

//Inputs
flashAlert: '.success',
usernameField: '#username',
passwordField: '#password',


//Buttons
loginButton: 'button[type="submit"]',

//Functions

loginApp: async function () {
   await browser.url('/login');
   const usernameField = await $(this.usernameField); 
   await usernameField.setValue('tomsmith');
   const passwordField= $(this.passwordField);
   await passwordField.setValue('SuperSecretPassword!');
   await browser.pause(2000);
   const loginButton = $(this.loginButton);
   await loginButton.click();
   await browser.pause(5000);
}


};
