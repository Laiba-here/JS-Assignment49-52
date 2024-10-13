//             .... question 1 ....
// function displayData(event) {
//     event.preventDefault();
//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;
//     document.getElementById('displayName').innerText = 'Name: ' + name;
//     document.getElementById('displayEmail').innerText = 'Email: ' + email;
//     document.getElementById('displayData').style.display = 'block';
// }


//           .... question 2 ....
// function toggleDetails(button) {
//     var moreText = button.previousElementSibling;
//     if (moreText.style.display === "none" || moreText.style.display === "") {
//         moreText.style.display = "block";
//         button.innerText = "Read less";
//     } else {
//         moreText.style.display = "none";
//         button.innerText = "Read more";
//     }
// }

//           ... question 3 ...
let students = [];
let editIndex = null;

document.getElementById('studentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const studentClass = document.getElementById('class').value;

    students.push({ name, class: studentClass });
    displayStudents();
    this.reset();
});

function displayStudents() {
    const tbody = document.querySelector('#studentTable tbody');
    tbody.innerHTML = ''; 
    students.forEach((student, index) => {
        const row = `<tr>
            <td>${index + 1}</td>
            <td>${student.name}</td>
            <td>${student.class}</td>
            <td>
                <button onclick="deleteStudent(${index})">Delete</button>
                <button onclick="editStudent(${index})">Edit</button>
            </td>
        </tr>`;
        tbody.innerHTML += row;
    });
}

function deleteStudent(index) {
    students.splice(index, 1);
    displayStudents();
}

function editStudent(index) {
    editIndex = index;
    document.getElementById('editName').value = students[index].name;
    document.getElementById('editClass').value = students[index].class;
    document.getElementById('editForm').style.display = 'block';
}

function saveEdit() {
    const updatedName = document.getElementById('editName').value;
    const updatedClass = document.getElementById('editClass').value;
    students[editIndex] = { name: updatedName, class: updatedClass };
    displayStudents();
    document.getElementById('editForm').style.display = 'none'; // Hide the form after editing
}
