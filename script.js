const [billInput, peopleInput] = document.querySelectorAll(
  ".input-text > input[type='text']"
);
const tips = document.querySelectorAll(".tip.btn");
const tipInput = document.querySelector(".tip.input");
const tipResult = document.querySelector(".tip-result");
const totalResult = document.querySelector(".total-result");

let billAmount = 0;
let tipAmount = 0;
let peopleCount = 1;

function render(bill, tip, people) {
  let totalTip = ((bill * (tip + 1) - bill) / people).toFixed(2);
  let totalBill = ((bill * (tip + 1)) / people).toFixed(2);
  tipResult.innerText = `$${totalTip}`;
  totalResult.innerText = `$${totalBill}`;
}

function reset() {
  billInput.value = "";
  peopleInput.value = "1";
  tips.forEach((t) => {
    t.classList.remove("active");
  });
  tipInput.value = "";
  tipResult.innerText = "$0.00";
  totalResult.innerText = "$0.00";
  billAmount = 0;
  tipAmount = 0;
  peopleCount = 1;
}

billInput.addEventListener("input", () => {
  billAmount = Number(billInput.value) || 0;
  render(billAmount, tipAmount, peopleCount);
});

peopleInput.addEventListener("input", () => {
  peopleCount = Number(peopleInput.value) || 1;
  render(billAmount, tipAmount, peopleCount);
});

tips.forEach((tip) => {
  tip.addEventListener("click", () => {
    tips.forEach((t) => {
      t.classList.remove("active");
    });
    tip.classList.add("active");
    tipInput.value = "";
    tipAmount = Number(tip.innerText.slice(0, -1) / 100) || 0;
    render(billAmount, tipAmount, peopleCount);
  });
});

tipInput.addEventListener("input", () => {
  tips.forEach((t) => {
    t.classList.remove("active");
  });
  tipAmount = Number(tipInput.value / 100) || 0;
  render(billAmount, tipAmount, peopleCount);
});
