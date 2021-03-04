/*
n addition to `Employee`'s properties and methods, `Engineer` will also have the following:

* `github`&mdash;GitHub username

* `getGithub()`

* `getRole()`&mdash;overridden to return `'Engineer'`
*/

const Employee = require('./Employee.js');
class Engineer extends Employee{
    constructor(na, id, em,git){
        super( na, id, em);
        this.github = git;
    }
    getGithub(){
        return this.github;
    }
    getRole(){
        return "Engineer";
    }
}
module.exports = Engineer;