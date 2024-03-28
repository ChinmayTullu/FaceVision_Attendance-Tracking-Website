let registrationForm=document.querySelector("#register-form");
let addTeacher=document.querySelector("#add-teacher-btn");
let addStudent=document.querySelector("#add-student-btn");
let submitBtn=document.querySelector("#submit-form-btn");
let teacherCheckbox=document.querySelector("#checkbox-div");

window.addEventListener("load", () => {
    registrationForm.style.visibility="hidden";
});

addTeacher.addEventListener("click", () => {
    registrationForm.style.visibility="visible";
    submitBtn.innerText="Add Teacher";
    teacherCheckbox.style.visibility="visible";
});

addStudent.addEventListener("click", () => {
    registrationForm.style.visibility="visible";
    submitBtn.innerText="Add Student";
    teacherCheckbox.style.visibility="hidden";
});


