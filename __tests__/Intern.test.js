const Intern = require("../lib/Intern.js")

const intern = new Intern('Bob', 1, 'bob@email.com','UofM');

    test('create an Intern object', () => {
        
    
        expect(intern.name).toBe("Bob")
        expect(intern.id).toBe(1);
        expect(intern.email).toBe("bob@email.com")
        expect(intern.school).toBe("UofM")
    
        expect(intern.getName()).toBe("Bob")
        expect(intern.getId()).toBe(1);
        expect(intern.getEmail()).toBe("bob@email.com")
        expect(intern.getRole())
        .toBe("Intern")
        expect(intern.getSchool()).toBe("UofM")
       
    })