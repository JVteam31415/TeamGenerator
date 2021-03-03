const Engineer = require('../lib/Engineer.js');


describe( "Engineer class", ()=> {
    it( "github is correct",()=>{
        expect(new Engineer("a","a","a", "githubname").getGithub()).toBe("githubname");
    });
    it( "Role is correct",()=>{
        expect(new Engineer("a","a","a", "githubname").getRole()).toBe("Engineer");
    });




});