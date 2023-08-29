"use strict";
let result = document.getElementById("result");
const btn = document.getElementById("btn");
// console.log(btn);
btn.addEventListener("click", function () {
  console.log("button clicked");
  const birtDay = document.getElementById("birthday").value;
  if (!birtDay) result.innerHTML = "Invalied birthday";
  else {
    const age = new Date().getFullYear() - new Date(birtDay).getFullYear();
    result.innerHTML = `You are ${age} years old`;
  }
});
