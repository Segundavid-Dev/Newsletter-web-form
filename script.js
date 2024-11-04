"use strict";

// getting selectors
const input_email = document.querySelector("#email");
const submit = document.querySelector(".submit");
const successMessageModal = document.querySelector(".success-message-modal");
const formWrapper = document.querySelector(".form-wrapper");
const form = document.querySelector(".form");
const container = document.querySelector(".container");
const emailRecipent = document.querySelector(".email-recipent");
const dismissModal = document.querySelector(".dismiss-modal");
// const body = document.body;

submit.addEventListener("click", function (e) {
  e.preventDefault();
  container.classList.add("hidden");
  successMessageModal.classList.remove("hidden");
  emailRecipent.textContent = input_email.value;
});

// remove modal notifaction an
dismissModal.addEventListener("click", function () {
  alert("dimiss modal");
});
