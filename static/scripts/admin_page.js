let registrationForm=document.querySelector("#register-form");

let addTeacher=document.querySelector("#add-teacher-btn");
let addStudent=document.querySelector("#add-student-btn");
let addHOD=document.querySelector("#add-hod-btn");

let HODradio=document.querySelector("#radio-departments");
let radiosDept=document.getElementsByName("radio-dept");

let teacherCheckbox=document.querySelector("#checkbox-div");
let csCheckbox=document.querySelector("#checkbox-cs");
let itCheckbox=document.querySelector("#checkbox-it");
let aidsCheckbox=document.querySelector("#checkbox-aids");

let studentRadio=document.querySelector("#radio-div");
let csRadio=document.querySelector("#student-radio-cs");
let itRadio=document.querySelector("#student-radio-it");
let aidsRadio=document.querySelector("#student-radio-aids");

let submitBtn=document.querySelector("#submit-form-btn");

let roleSelected="";

let unselectAllRadios = (radios) => {
    for(let radio of radios) {
        radio.checked=false;
    }
}

let uncheckAllCheckboxes = (checkboxes) => {
    for(let checkbox of checkboxes) {
        checkbox.checked=false;
    }
}

let displayOneAndHideOthers = (show, hide1, hide2) => {
    show.style.display="block";
    hide1.style.display="none";
    hide2.style.display="none";
}

window.addEventListener("load", () => {
    registrationForm.style.visibility="hidden";
});

addHOD.addEventListener("click", () => {
    roleSelected="hod";
    unselectAllRadios(radiosDept);

    registrationForm.style.visibility="visible";
    HODradio.style.display="block";
    teacherCheckbox.style.display="none";
    studentRadio.style.display="none";

    submitBtn.innerText="Add HOD";
});

addTeacher.addEventListener("click", () => {
    roleSelected="teacher";
    unselectAllRadios(radiosDept);
    uncheckAllCheckboxes(document.querySelectorAll(".checkbox-cs"));
    uncheckAllCheckboxes(document.querySelectorAll(".checkbox-it"));
    uncheckAllCheckboxes(document.querySelectorAll(".checkbox-aids"));

    registrationForm.style.visibility="visible";
    submitBtn.innerText="Add Teacher";
    HODradio.style.display="block";
    teacherCheckbox.style.display="none";
    studentRadio.style.display="none";
    
    for(let radio of radiosDept) {

        radio.addEventListener("change", () => {
            if(roleSelected==="teacher") {

                teacherCheckbox.style.display="block";
                if(radio.id==="radio-cs") {
                    displayOneAndHideOthers(csCheckbox, itCheckbox, aidsCheckbox);
                }
                else if(radio.id==="radio-it") {
                    displayOneAndHideOthers(itCheckbox, csCheckbox, aidsCheckbox);
                }
                else if(radio.id==="radio-aids") {
                    displayOneAndHideOthers(aidsCheckbox, csCheckbox, itCheckbox);
                }
            }
        });
    }
});

addStudent.addEventListener("click", () => {
    roleSelected="student";
    unselectAllRadios(radiosDept);
    unselectAllRadios(document.getElementsByName("cs-radio-division"));
    unselectAllRadios(document.getElementsByName("it-radio-division"));
    unselectAllRadios(document.getElementsByName("aids-radio-division"));

    registrationForm.style.visibility="visible";
    HODradio.style.display="block";
    teacherCheckbox.style.display="none";
    studentRadio.style.display="none";
    
    submitBtn.innerText="Add Student";

    for(let radio of radiosDept) {

        radio.addEventListener("change", () => {
            if(roleSelected==="student") {

                studentRadio.style.display="block";
                if(radio.id==="radio-cs") {
                    displayOneAndHideOthers(csRadio, itRadio, aidsRadio);
                }
                else if(radio.id==="radio-it") {
                    displayOneAndHideOthers(itRadio, csRadio, aidsRadio);
                }
                else if(radio.id==="radio-aids") {
                    displayOneAndHideOthers(aidsRadio, csRadio, itRadio);
                }
            }
        });
    }
});


