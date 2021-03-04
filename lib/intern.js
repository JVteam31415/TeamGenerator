/*
In addition to `Employee`'s properties and methods, `Intern` will also have the following:

* `school`

* `getSchool()`

* `getRole()`&mdash;overridden to return `'Intern'`


*/

const Employee = require('./Employee.js');
class Intern extends Employee{
    constructor(na, id, em,sc){
        super( na, id, em);
        this.school = sc;
    }
    getSchool(){
        return this.school;
    }
    getRole(){
        return "Intern";
    }

}

module.exports = Intern;