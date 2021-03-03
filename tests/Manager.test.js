const Manager = require('../lib/Manager.js');


describe( "Employee class", ()=> {
    it( "Team is correct",()=>{
        expect(new Manager("a","a","a",1).officeNumber).toBe(1);
    });
    it( "Role is correct",()=>{
        expect(new Manager("a","a","a",1).getRole).toBe("Manager");
    });





});