const Engineer = require('../lib/Engineer.js');

const engineer = new Engineer('Bob', 1, 'bob@email.com','GitHubRepo');

    test('create an engineer object', () => {
        
    
        expect(engineer.name).toBe("Bob")
        expect(engineer.id).toBe(1);
        expect(engineer.email).toBe("bob@email.com")
        expect(engineer.github).toBe("GitHubRepo")
    
        expect(engineer.getName()).toBe("Bob")
        expect(engineer.getId()).toBe(1);
        expect(engineer.getEmail()).toBe("bob@email.com")
        expect(engineer.getRole())
        .toBe("Engineer")
        expect(engineer.getGithub()).toBe("GitHubRepo")
       
    })
