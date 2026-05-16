let students=[];
// sing add functions
function addStudents(id,name,course){
    let student ={
        Id: id,
        Name: name,
        Course : course

    };
    students.push(student);
}

addStudents(1, "Ashrafi", "QA");
addStudents(2, "John", "Developer");
addStudents(3, "Sara", "Testing");

console.log(students);
