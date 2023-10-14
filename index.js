function numPress(numberValue) {
  document.getElementsByName("display")[0].value += numberValue;
  //document.getElementsByName("display")[1].value += numberValue + "0";
}
function clearDisplay() {
  document.getElementsByName("display")[0].value = "";
}

function deleteDisplay() {
  var deleteText = document.getElementsByName("display")[0].value;
  document.getElementsByName("display")[0].value = deleteText
    .toString()
    .slice(0, -1);
}
function calculate() {
  var text = document.getElementsByName("display")[0].value;
  document.getElementsByName("display")[0].value = eval(text);
}
const changeMode = () => {
  let divElement = document.getElementById("divCalculator");
  let btnElement = document.getElementById("btnMode");
  divElement.classList.toggle("light");
  btnElement.classList.toggle("buttonLight");
};
