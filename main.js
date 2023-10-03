let gracie = document.querySelector(".thankYouCard");
let down = document.querySelector("indexdown");
let up = document.querySelector(".indexup");
let btn = document.querySelector(".submit");

btn.addEventListener("click", function () {
  gracie.classList.remove("indexdown");
  gracie.classList.add("indexup");
});

let number = document.querySelectorAll(".item");
let score = document.getElementById("result");
number.forEach((result) => {
  result.addEventListener("click", () => {
    score.innerHTML = result.innerHTML;
  });
});
