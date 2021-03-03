const intern = require('../lib/intern.js');


describe( "intern class", ()=> {
    it( "school is correct",()=>{
        expect(new intern("a","a","a","RPI").getSchool()).toBe("RPI");
    });
    it( "Role is correct",()=>{
        expect(new intern("a","a","a","RPI").getRole()).toBe("Intern");
    });




});