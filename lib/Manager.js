/*
In addition to `Employee`'s properties and methods, `Manager` will also have the following:

* `officeNumber`

* `getRole()`&mdash;overridden to return `'Manager'`
*/

const Employee = require('./Employee.js');
class Manager extends Employee{
    constructor(na, id, em, nu){
        super( na, id, em);
        this.officeNumber = nu;
    }
    getRole(){
        return "Manager";
    }
    getOfficeNumber(){
        return this.officeNumber;
    }

}

module.exports = Manager;