const submitBtn = document.getElementById("Submit");
const thank = document.querySelector(".thank-you");
const RatingPage = document.querySelector(".rating-Page");
const rating = document.getElementById("rating");
const rateBtn = document.querySelectorAll(".btn");

submitBtn.addEventListener("click", () => {
  RatingPage.classList.add("hidden");
  thank.classList.remove("hidden");
  document.getElementById("success").play();
});

rateBtn.forEach((button) => {
  button.addEventListener("click", () => {
    rating.innerHTML = button.innerHTML;
  });
});

