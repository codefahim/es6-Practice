class Student {
    constructor(fullName, id, parent) {
        this.fullName = fullName;
        this.id = id;
        this.parent = parent;

    }
};
const student1 = new Student('Tareq Mohammad', 259562, 'Tareq Jaman');
const student2 = new Student('Abid Mohammad', 258562, 'Abid Jaman');
const student3 = new Student('Kamal Mohammad', 248562, 'Fahim Jaman');
console.log(student1, student2, student3);
console.log(student1.id, student2.id, student3.id);


// class to object by new keyword