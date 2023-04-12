const button = document.querySelector("#bigger-button");
const radioFancy = document.getElementById("fancy-radio");
const boringRadio = document.getElementById("boring-radio");
const textArea = document.getElementById("text-area");
const moo = document.getElementById("moo-button");

const alertFunction = () => {
  alert("Hello, world!");
  textArea.style.fontSize = "24pt";
};
const anotherAlertFunction = () => {
  alert("fancy!!!");
  textArea.style.fontWeight = "bold";
  textArea.style.color = "blue";
  textArea.style.textDecoration = "underline";
};
button.onclick = () => {
  alertFunction();
};
radioFancy.onchange = (event) => {
  if (event.target.checked) {
    anotherAlertFunction();
  }
};
boringRadio.onchange = (event) => {
  if (event.target.checked) {
    textArea.style.fontWeight = "normal";
  }
};
moo.onclick = () => {
  let text = textArea.value.toUpperCase();
  let splitText = text.split(".");
  textArea.value = splitText.join("-Moo. ");
};
