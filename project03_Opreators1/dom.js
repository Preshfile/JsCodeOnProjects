
function verify() {
  var x, y, z;
  x = parseInt(document.getElementById("firstNum").value);
  y = parseInt(document.getElementById("secNum").value);
  z = parseInt(document.getElementById("thirdNum").value);

  if (x == y || x == z || y == z) {
    console.log("Invalid");
  } else {
    if (y > x && y > z) {
      console.log(y);
      document.getElementById("result").innerHTML = y;
    }
    if (x > y && x > z) {
      console.log(x);
      document.getElementById("result").innerHTML = x;
    }
    if (z > y && z > x) {
      console.log(z);
      document.getElementById("result").innerHTML = z;
    }
  }
}
