const { Employees } = require("./Employees");

class SoftwareEngineer extends Employees {
        #programmingLanguages;
        constructor(programmingLanguages){
            this.#programmingLanguages = []
        };

        getProgrammingLanguages(){
            return this.#programmingLanguages;
        }
        
        setProgrammingLanguages(language){
            this.#programmingLanguages.push = language;
        }


    
}

module.exports = {
    SoftwareEngineer,
}