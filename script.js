"use strict";

const input_email = document.querySelector("#email");
const submit = document.querySelector(".submit");
const body = document.body;

submit.addEventListener("click", function (e) {
  //   e.preventDefault(); // prevent default behaviour of the loading submit input
  console.log(input_email.value);
});
