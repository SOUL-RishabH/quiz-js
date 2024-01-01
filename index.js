const form = document.querySelector(".quiz-form");
const ans = ["C", "B", "A", "A", "D"];
const result = document.querySelector(".result");
const questions = document.querySelectorAll(".question");


form.addEventListener("submit", function (event) {
    event.preventDefault();
    let score = 0;
    const userAnswer = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value];
    userAnswer.forEach(function (cans, index) {
        if (cans === ans[index]) {
            score += 1;
            questions[index].classList.add("correct");
        } else {
            questions[index].classList.add("wrong");
        }
    });

    scrollTo(0, 0);
    result.classList.remove("hide");
    result.querySelector("p").textContent = "Your Score " + score + " / 5";
});