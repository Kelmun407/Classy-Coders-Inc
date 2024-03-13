const { Employees } = require("./classes/Employees")
const { Manager } = require("./classes/Manager")
const { SalesPerson } = require("./classes/SalesPerson")
const { SoftwareEngineer } = require("./classes/SoftwareEngineer")

// Run and debug your code here

const programmer = new SoftwareEngineer("Becca", "Senior Software Engineer", 100000, ["JavaScript", "Java", "Python"]);
console.log(programmer.getProgrammingLanguages()); // ["JavaScript", "Java", "Python"]
programmer.setProgrammingLanguage("C#"); 
console.log(programmer.getProgrammingLanguages()); // ["JavaScript", "Java", "Python", "C#"]



module.exports = {
    Employees,
    Manager,
    SalesPerson,
    SoftwareEngineer
}