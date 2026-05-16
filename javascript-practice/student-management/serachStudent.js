let students=[];
// using add functions
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

//searching student using id
function searchStudent(id){
  let fetchedid=  students.find(function(value){
return value.Id===id;

    })

//console.log(fetchedid);
console.log(`Id : ${fetchedid.Id}, AssignedCousre : ${fetchedid.Course}`);

}

searchStudent(3);
//searchStudent(4);