const Employee = require('../lib/Employee.js');

describe( "Employee class", ()=> {
    it( "Email gotten correctly",()=>{
        expect(new Employee("genericName","id101","something@gmail.com").email).toBe("something@gmail.com");
    });
    it( "name gotten correctly",()=>{
        expect(new Employee("genericName","id101","something@gmail.com").getName()).toBe("genericName");
    });
    it( "ID gotten correctly",()=>{
        expect(new Employee("genericName","id101","something@gmail.com").getId()).toBe("id101");
    });
    it( "Role gotten correctly",()=>{
        expect(new Employee("genericName","id101","something@gmail.com").getRole()).toBe("Employee");
    });




});