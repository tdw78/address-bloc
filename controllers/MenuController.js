const inquirer = require('inquirer');

module.exports = class MenuController {
  constructor() {
    this.mainMenuQuestions = [
      {
           type: "list",
           name: "mainMenuChoice",
        message: "Please choose from an option below: ",
        choices: [
          "Add new contact",
          "Get todays date",
          "Exit"
        ]
      }
    ];
    this.contacts = [];
  }

 main() {
    console.log("Welcome to AddressBloc!");
    inquirer.prompt(this.mainMenuQuestions).then((response) => {
       switch (response.mainMenuChoice) {
         case "Add new contact":
            this.addContact();
            break;
         case "Get todays date":
           this.getDate();
           break;
         case "Exit":
           this.exit();
           break;
         default:
           console.log('Invalid Input');
           this.main();
       }
    })
    .catch((err) => {
      console.log(err);
    });
 }

clear () {
  console.log("\x1Bc");
 }

exit () {
  console.log("Thanks for using AddressBloc!");
  process.exit();
 }

addContact () {
   this.clear();
   console.log("addContact called");
   this.main();
 }

 getDate () {
   let today = new Date();
   console.log(today);
   this.main();
 }

}





















