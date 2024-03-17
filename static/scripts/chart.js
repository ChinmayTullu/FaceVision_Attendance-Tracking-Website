let studentDataElement = document.getElementById('student-data');
let studentJsonString = undefined
let student = undefined
if (studentDataElement)
    studentJsonString = studentDataElement.dataset.student;
if (studentJsonString)
    student = JSON.parse(studentJsonString);

console.log(student); //To check if 'student' is correctly parsed
let subjectsList=[]
let attendanceList=[]
for (let subject in student) {
    if (subject!=="roll_number") {
        subjectsList.push(subject)
        attendanceList.push(student[subject])
    }   
}
console.log(subjectsList)
console.log(attendanceList)

const ctx = document.getElementById('barchart').getContext('2d');
const barchart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: subjectsList,
        datasets: [{
            label: 'Attendance',
            data: attendanceList,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 286, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 286, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                suggestedMax: 5
            }
        }
    }
});

const ctx2 = document.getElementById('doughnut').getContext('2d');
const doughnut = new Chart(ctx2, {
    type: 'doughnut',
    data: {
        labels: subjectsList,
        datasets: [{
            label: 'Attendance',
            data: attendanceList,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 286, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 286, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                suggestedMax: 5
            }
        }
    }
});

const ctx3 = document.getElementById('line').getContext('2d');
const line = new Chart(ctx3, {
    type: 'line',
    data: {
        labels: subjectsList,
        datasets: [{
            label: "Attendance",
            data: attendanceList,
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            fill: false
        }]
    }
});

const ctx4 = document.getElementById('polar').getContext('2d');
const porlar = new Chart(ctx4, {
    type: 'polarArea',
    data: {
        labels: subjectsList,
        datasets: [{
            label: 'Attendance',
            data: attendanceList,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 286, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 286, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                suggestedMax: 5
            }
        }
    }
});
