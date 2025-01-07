let x = 22;

document.getElementById("eksi").onclick = function () {
  document.getElementById("yazi").style.fontSize = x + "px";
  x--;
  document.getElementById("textPx") = x;
  console.log("selam" + x);
};

document.getElementById("arti").onclick = function () {
  document.getElementById("yazi").style.fontSize = x + "px";
  x++;
  console.log("selam" + x);
};


