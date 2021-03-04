/*
In addition to `Employee`'s properties and methods, `Manager` will also have the following:

* `officeNumber`

* `getRole()`&mdash;overridden to return `'Manager'`
*/

const Employee = require('./Employee.js');
class Intern extends Employee{
    constructor(na, id, em, nu){
        super( na, id, em);
        self.officeNumber = nu;
    }
    getRole(){
        return "Manager";
    }

}
