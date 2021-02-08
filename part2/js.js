"use strict";

const studentNameInput = document.querySelector("#student-name"); // student name input
const studentIdInput = document.querySelector("#student-id"); // student ID input
const studentGPAInput = document.querySelector("#student-gpa"); // student ID input
const addBtn = document.querySelector("#add-student"); // add button
const studentCount = document.querySelector("#student-count"); // student count
const ulList = document.querySelector("#student-list"); // ul
const removeBtn = document.getElementById("remove-selected-students"); // remove button
let count = 0;
studentCount.textContent = count;
// Event Handlers
addBtn.addEventListener("click", addStudent);
removeBtn.addEventListener("click", removeStudent);
//reset input
const reset = () => {
  studentNameInput.value = "";
  studentIdInput.value = "";
  studentGPAInput.value = "";
};

// create List/add list
function addStudent() {
  const studentInfo = document.createElement("li");

  let st_name = studentNameInput.value;
  let st_Id = studentIdInput.value;
  let st_gpa = studentGPAInput.value;
  studentInfo.innerHTML = `${st_name}, id: ${st_Id}, GPA: ${st_gpa}`;
  ulList.appendChild(studentInfo);

  studentInfo.addEventListener("click", function () {
    studentInfo.classList.toggle("selected");
    ulList.appendChild(studentInfo);
  });

  count++;
  studentCount.innerHTML = count;
  reset();
}
// remove items from list
function removeStudent() {
  let item = document.getElementsByClassName("selected");
  for (let i = item.length; i > 0; i--) {
    item[i - 1].remove();
    count--;
    studentCount.innerHTML = count;
  }
}
