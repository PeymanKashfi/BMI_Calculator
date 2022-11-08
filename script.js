"use strict";

//Function Declaration
function calculateBMI_Dec() {
  const mass = document.getElementById("mass").value;
  const height = document.getElementById("height").value;

  const result = mass / (height * height);

  document.getElementById("dec_message").textContent = result;
}

//Function Expression
const calculateBMI_Exp = function () {
  const mass = document.getElementById("mass").value;
  const height = document.getElementById("height").value;

  const result = mass / (height * height);

  document.getElementById("exp_message").textContent = result;
};

//Arrow Function
const calculateBMI_Arr = () => {
  const mass = document.getElementById("mass").value;
  const height = document.getElementById("height").value;

  const result = mass / (height * height);

  document.getElementById("arr_message").textContent = result;
};
