let students = JSON.parse(localStorage.getItem("students")) || [];
let editIndex = -1;

function displayStudents(){
    let tableBody = document.getElementById("tableBody");
    tableBody.innerHTML = "";

    students.forEach((student,index)=>{
        tableBody.innerHTML += `
        <tr>
            <td>${student.name}</td>
            <td>${student.age}</td>
            <td>
                <button class="edit" onclick="editStudent(${index})">Edit</button>
                <button class="delete" onclick="deleteStudent(${index})">Delete</button>
            </td>
        </tr>
        `;
    });

    localStorage.setItem("students",JSON.stringify(students));
}

function addStudent(){
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;

    if(name === "" || age === ""){
        alert("Please fill all fields");
        return;
    }

    if(editIndex === -1){
        students.push({name,age});
    }else{
        students[editIndex] = {name,age};
        editIndex = -1;
    }

    document.getElementById("name").value="";
    document.getElementById("age").value="";

    displayStudents();
}

function editStudent(index){
    document.getElementById("name").value = students[index].name;
    document.getElementById("age").value = students[index].age;

    editIndex = index;
}

function deleteStudent(index){
    students.splice(index,1);
    displayStudents();
}

displayStudents();