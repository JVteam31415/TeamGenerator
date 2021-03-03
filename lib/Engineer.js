/*
n addition to `Employee`'s properties and methods, `Engineer` will also have the following:

* `github`&mdash;GitHub username

* `getGithub()`

* `getRole()`&mdash;overridden to return `'Engineer'`
*/

const employee = require('./Employee.js');
class Engineer extends Employee{
    constructor(na, id, em,git){
        super( na, id, em);
        self.github = git;
    }
    getGithub(){
        return self.github;
    }
    getRole(){
        return "Engineer";
    }
}