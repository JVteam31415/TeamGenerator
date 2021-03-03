/*
In addition to `Employee`'s properties and methods, `Intern` will also have the following:

* `school`

* `getSchool()`

* `getRole()`&mdash;overridden to return `'Intern'`


*/

const employee = require('./Employee.js');
class Intern extends Employee{
    constructor(na, id, em,sc){
        super( na, id, em);
        self.school = sc;
    }
    getSchool(){
        return self.school;
    }
    getRole(){
        return "Intern";
    }

}