var colour1 = document.querySelector(".colour1");
var colour2 = document.querySelector(".colour2");
var css = document.querySelector("h3");
var body = document.getElementById("gradient");
var button = document.getElementById("random");

css.textContent = "linear-gradient(to right, "+colour1.value+", "+colour2.value+")";

function setGradient() {
    body.style.background = "linear-gradient(to right, "+colour1.value+", "+colour2.value+")";
    css.textContent = body.style.background + ";";
}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
  
  function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }

colour1.addEventListener("input",setGradient);

colour2.addEventListener("input",setGradient);

button.addEventListener("click",function(){
    colour1.value = rgbToHex(Math.floor(Math.random() * 256),Math.floor(Math.random() * 256),Math.floor(Math.random() * 256));
    colour2.value = rgbToHex(Math.floor(Math.random() * 256),Math.floor(Math.random() * 256),Math.floor(Math.random() * 256));
    setGradient();
})