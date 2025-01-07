let x = 0;

document.getElementById("aydinlik").onclick = function () {
  if (x % 2 == 0) {
    document.body.style.color = "White";
    document.body.style.backgroundColor = "Black";
    document.getElementById("aydinlik").style.backgroundColor = "White";
    document.getElementById("aydinlik").style.color = "Black";

    x = 0;
  } else {
    document.body.style.color = "Black";
    document.body.style.backgroundColor = "White";
    document.getElementById("aydinlik").style.backgroundColor = "Black";
    document.getElementById("aydinlik").style.color = "White";
  }
  x++;
};
