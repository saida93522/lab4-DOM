"use strict";

const todoDiv = document.querySelector(".todoDiv");
const userInput = document.querySelector("#todo");
const addBtn = document.querySelector(".addBtn");
const clearbtn = document.querySelector(".clearBtn");
const message = document.getElementById("check");
const ul_list = document.getElementById("list");

addBtn.addEventListener("click", toDoList);
clearbtn.addEventListener("click", clearList);

function toDoList(event) {
  // to stop forms from automatically submitting when the submit button is clicked
  event.preventDefault();
  // create List
  let lists = document.createElement("li");
  lists.classList.add("lists");
  // verify
  let verify = userInput.value.trim(); //trim removes whitespace from the front & back of a string.

  if (verify.length === 1 || verify === "") {
    message.innerHTML = "Please enter more than 1 character ";
    return (userInput.value = "");
  } else if (verify.length > 50) {
    alert("Please enter less than 50 charecters");
    return userInput.value;
  } else {
    message.innerHTML = "";
    lists.textContent = userInput.value;
  }
  // Add list
  //  target ul child element = li
  if (ul_list.childNodes.length <= 9) {
    ul_list.append(lists);
    todoDiv.appendChild(ul_list);
    userInput.value = "";
  } else {
    alert("You can only add a maximum of 10 items.Clear the list to add new");
    userInput.value = "";
  }
}

function clearList() {
  ul_list.innerHTML = "";
}
