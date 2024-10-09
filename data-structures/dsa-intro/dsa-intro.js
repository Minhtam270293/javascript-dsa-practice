class Student {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.tardies = 0;
    };
    fullname() {
        return `Your full name is ${this.firstName} ${this.lastName}`;
    };

    markLate() {
        this.tardies++;
        return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`
    }
    
};

let firstStudent = new Student ('Minh', 'Ngoc');
let secondStudent = new Student ('Tam','Minh');

firstStudent.fullname();
firstStudent.markLate();