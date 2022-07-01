const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circels = document.querySelectorAll(".circle");

let currentActive = 1;
next.addEventListener("click", () => {
  if (currentActive < circels.length) currentActive++;
  update();
});
prev.addEventListener("click", () => {
  if (currentActive > 0) currentActive--;
  update();
});

function update() {
  circels.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });
  const actives = document.querySelectorAll(".active");

  progress.style.width = (currentActive - 1) * 33 + "%";
}
