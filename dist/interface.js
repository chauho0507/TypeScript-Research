"use strict";
let add;
add = (n1, n2) => {
    return n1 + n2;
};
let userInfo;
userInfo = {
    firstName: 'Ho',
    info: {
        location: '29 Nguyen Chi Dieu',
        phone: '0935025045',
    },
};
userInfo = {
    lastName: 'Chau',
};
userInfo = {
    firstName: 'Ho',
    lastName: 'Chau',
    outputName: 'Chau ho',
};
class Person {
    constructor(phoneNumber, lastName) {
        if (lastName) {
            this.lastName = lastName;
        }
        if (phoneNumber)
            this.phoneNumber = phoneNumber;
    }
    greet(phrase) {
        if (this.lastName)
            console.log(phrase + ' ' + this.lastName);
        else
            console.log('Hi!');
    }
}
let user1;
user1 = new Person(123, 'CHAU');
//# sourceMappingURL=interface.js.map