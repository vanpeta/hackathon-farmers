function toCelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}
function toFarenheit(Celsius) {
  return (Celsius * 9) / 5 + 32;
}


function myFunction() {
  var check = document.getElementById("myNumber").value;
  var FarCheck = document.getElementById("Fahrenheit").checked;
  var CelCheck = document.getElementById("Celsius").checked;

  if (check === "" || (FarCheck == false && CelCheck == false)) {
    document.getElementById("demo").innerHTML = "Please fill out everything";
  } else {
    if (document.getElementById("Celsius").checked) {
      var temp = document.getElementById("myNumber").value;
      console.log(temp);
      if (isNaN(temp)) {
        document.getElementById("demo").innerHTML =
          "Please enter a number not a letter";
      } else {
        document.getElementById("demo").innerHTML =
          temp + " C = " + toFarenheit(temp) + " F ";
      }
    } else if (document.getElementById("Fahrenheit").checked) {
      var temp1 = document.getElementById("myNumber").value;
      if (isNaN(temp1)) {
        document.getElementById("demo").innerHTML =
          "Please enter a number not a letter";
      } else {
        document.getElementById("demo").innerHTML =
          temp1 + " F = " + toCelsius(temp1).toFixed(2) + " C ";
      }
    }
  }
}
