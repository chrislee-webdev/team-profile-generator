const manager = require("../lib/manager.js")

const manager = new Manager('Bob', 1, 'bob@email.com','123');

    test('create a Manager object', () => {
        
    
        expect(manager.name).toBe("Bob")
        expect(manager.id).toBe(1);
        expect(manager.email).toBe("bob@email.com")
        expect(manager.officeNumber).toBe("123")
    
        expect(manager.getName()).toBe("Bob")
        expect(manager.getId()).toBe(1);
        expect(manager.getEmail()).toBe("bob@email.com")
        expect(manager.getRole())
        .toBe("Manager")
        expect(manager.getSchool()).toBe("123")
       
    })