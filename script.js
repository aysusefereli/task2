var boxes = document.querySelectorAll(".box");
let red = document.getElementById("red");
let blue = document.getElementById("blue");
let green = document.getElementById("green");

let box = prompt("Select box to animate:\n1. red\n2. blue\n3. green",1);
let animation = prompt("Select animation:\n1. move on edges\n2. rotate and scale\n3. randomColor\n4. all in the same time",1);
let duration = parseFloat(prompt("Enter animation duration:",2.5));

function startAnimation(box, animationName) {
  setTimeout(function() {
    box.style.animation = animationName + " " + duration + "s";
  },0);
}

  if (box === "1" || box === "2" || box === "3") {
    let selectedBox = boxes[parseInt(box) - 1];
    let selectedAnimation;

    if (animation === "1") {
        selectedAnimation = "firstanimation";
    } else if (animation === "2") {
        selectedAnimation = "secondanimation";
    } else if (animation === "3") {
        selectedAnimation = "thirdanimation";
    } else if (animation === "4") {
        selectedAnimation = "fourthanimation";
    } else {
      alert("Wrong choice.");
    }

    if (selectedAnimation === "allAnimations") {
        setTimeout(showAllBoxes, duration * 1000);
    } else {
        startAnimation(selectedBox, selectedAnimation);
        setTimeout(showAllBoxes, duration * 1000);
    }

  }
