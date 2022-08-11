function getAvarage() {
  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = parseInt(document.getElementById("num2").value);
  var num3 = parseInt(document.getElementById("num3").value);
  var result = (num1 + num2 + num3) / 3;
  document.getElementById("result").innerHTML = "Média: " + result;
}
conole.log(num1 + num2 + num3);
