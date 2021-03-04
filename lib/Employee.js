/*
The first class is an `Employee` parent class with the following properties and methods:

* `name`

* `id`

* `email`

* `getName()`

* `getId()`

* `getEmail()`

* `getRole()`&mdash;returns `'Employee'`
*/

class Employee{
    constructor(na, id, em){
        this.name = na;
        this.id=id;
        this.email=em;
    }
    getName(){
        return this.name;
    }
    getId(){
        return this.id;
    }
    getRole(){
        return "Employee";
    }
}
module.exports = Employee;