const student = [{ name: 'DeepJol', id: 71 }, { name: 'manna', id: 41 }, { name: 'Moyoury', id: 31 }, { name: 'sakib', id: 21 }];

// console.log(student[0].id);
const studentIdNumber = [];
const studentNameList = [];
for (let i = 0; i < student.length; i++) {
    const idNumber = student[i].id;
    const studentName = student[i].name;
    studentIdNumber.push(idNumber);
    studentNameList.push(studentName);
}
console.log(studentIdNumber);
console.log(studentNameList);

// findout id numbers with map 
const idnumbers = student.map(id => id.id);
console.log(idnumbers);
// findout students name with map
const studentNameList2 = student.map(studentNames => studentNames.name);
console.log(studentNameList2);

//filter students name and id  with map
const biggerStudent = student.filter(studentNamesid => studentNamesid.id > 31);
console.log(biggerStudent);
//find students name and id  with map
const biggerStudentfind = student.find(studentNamesid => studentNamesid.id > 31);
console.log(biggerStudentfind);