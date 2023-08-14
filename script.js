let red = document.getElementById("red");
let blue = document.getElementById("blue");
let green = document.getElementById("green");

let colors = prompt("Select box to animate:\n1. red\n2. blue\n3. green",1);
let animations = prompt("Select animation:\n1. move on edges\n2. rotate and scale\n3. randomColor\n4. all in the same time",1)
let duration = prompt("Enter animation duration:",2.5)

red.classList.remove("box");
blue.classList.remove("box");
green.classList.remove("box");

if (colors=="1") {
    red.classList.add("box");
    blue.style.display = "block";
    green.style.display = "block";
} else if (colors=="2") {
    blue.classList.add("box");
    red.style.display = "block";
    green.style.display = "block";
} else if (colors=="3") {
    green.classList.add("box");
    red.style.display = "block";
    blue.style.display = "block";
} else {
    alert("Wrong choice.")
}

function startAnimation(box, animationName, duration) {
    red.style.animation = "none";
    blue.style.animation = "none";
    green.style.animation = "none";
    setTimeout(function() {
      box.style.animation = animationName + " " + duration + "s forwards";
    }, duration);
  }

if (animations=="1") {
    startAnimation(red, "firstanimation", duration);
    startAnimation(blue, "firstanimation", duration);
    startAnimation(green, "firstanimation", duration);
} else if (animations=="2") {
    startAnimation(red, "secondanimation", duration);
    startAnimation(blue, "secondanimation", duration);
    startAnimation(green, "secondanimation", duration);
} else if (animations=="3") {
    startAnimation(red, "thirdanimation", duration);
    startAnimation(blue, "thirdanimation", duration);
    startAnimation(green, "thirdanimation", duration);
} else if (animations=="4") {
    startAnimation(red, "firstanimation", duration);
    startAnimation(blue, "firstanimation", duration);
    startAnimation(green, "firstanimation", duration);
    startAnimation(red, "secondanimation", duration);
    startAnimation(blue, "secondanimation", duration);
    startAnimation(green, "secondanimation", duration);
    startAnimation(red, "thirdanimation", duration);
    startAnimation(blue, "thirdanimation", duration);
    startAnimation(green, "thirdanimation", duration);
} else {
    alert("Wrong choice.")
}