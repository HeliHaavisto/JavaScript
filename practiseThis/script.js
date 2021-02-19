function addTable() {
    var table = document.getElementById("dataTable");

    var row = table.insertRow();
    var studentNo = row.insertCell(0);
    var studentName = row.insertCell(1);
    var studentAge = row.insertCell(2);
    var isStaff = row.insertCell(3);

    studentNo.innerHTML = "123";
    studentName.innerHTML = "test user";
    studentAge.innerHTML = "99";
}

document.addEventListener('DOMContentLoaded', addTable());

const getUsers = () => [
    {
        studentNo: 123,
        name: 'harry',
        age: 15
    },
    {
        studentNo: 234,
        name: 'Ron',
        age: 16
    },
    {
        studentNo: 135,
        name: 'Hermione',
        age: 17
    },
    {
        studentNo: -1,
        name: 'Snape',
        age: 55
    },
    {
        studentNo: -1,
        name: 'Hagrid',
        age: 65
    }
];

const users = getUsers();

console.log(users);

function addUser(studentNo, name, age, staff) {
    var table = document.getElementById("dataTable");

    var row = table.insertRow();
    var studentNum = row.insertCell(0);
    var studentName = row.insertCell(1);
    var studentAge = row.insertCell(2);
    var isStaff = row.insertCell(3);

    studentNum.innerHTML = studentNo;
    studentName.innerHTML = name;
    studentAge.innerHTML = age;

    if (studentNo < 0) {
        isStaff.innerHTML = "yes";
    } else {
        isStaff.innerHTML = "no";
    }
}



users.forEach(user => {
    var { studentNo, name, age } = user;
    addUser(studentNo, name, age);

});

function getOldest(users) {
    let oldest = 0;
    let oldestName = '';

    for (let i = 0; i < users.length; i++) {
        const student = users[i];
        if (oldest < student.age) {
            oldest = student.age;
            oldestName = student.name;
        }

    }
    console.log(oldestName);

}

getOldest(users);



function sortArray(users) {

    for (let x = 0; x < users.length; x++) {

        for (let i = 0; i < (users.length - 1); i++) {
            let student = users[i];
            let student2 = users[i + 1];
            if (student.age < student2.age) {

                let temp = student2;
                users[i + 1] = users[i];
                users[i] = temp;
            }
        }

    }
    return users;

}
sortArray(users);
console.log(users);

document.getElementById("sort").addEventListener("click", function () {
    let table = document.getElementById("dataTable").getElementsByTagName("tbody")[0];
    table.innerHTML = "";
    users.forEach(user => {
        var { studentNo, name, age } = user;
        addUser(studentNo, name, age);

    });
});