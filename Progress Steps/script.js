const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

//places the four circle divs as a node list. Needed for conditional event listener.
const circles = document.querySelectorAll(".circle");

//this will be serving a role similar to an index.
let currentActive = 1;

next.addEventListener("click", () => {
  currentActive++;

  //node list can be treated as an array - has a length property.
  //prerequisite to make the active state dynamic. 
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }

  update();
});

prev.addEventListener("click", () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }
  update();
});

function update() {
  //for each circle im running a function where im comparing the index of the current circle
  //with the index of the next circle. If the index is lower, it will
  //update the state to active. If not, it will remove the active state.
  //currentActive is set to 1 - line 9.
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });
  const actives = document.querySelectorAll(".active");

  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

    //if current active is in the front, the prev button gets disabled.
  if (currentActive === 1) {
    prev.disabled = true;

  } else if (currentActive === circles.length) {
    //if the current active is in the end, the next button gets disabled.
    next.disabled = true;

  } else {
    //if located anywhere but the beginning or end, both buttons can be clicked.
    prev.disabled = false;
    next.disabled = false;
  }
}
