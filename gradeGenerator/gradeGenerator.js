var studentScore = document.getElementById("score");
var showGrade = document.getElementById("show");

function generateGrade() {
  var myScore = parseInt(studentScore.value);

  if (myScore < 0 || myScore > 100 || isNaN(myScore)) {
    showGrade.style.color = "red";
    showGrade.innerHTML = "invalid! Please enter 0 - 100";
  } else {
    if (myScore >= 90 && myScore <= 100) {
      showGrade.innerHTML = "A";
    } else if (myScore >= 80 && myScore <= 89) {
      showGrade.innerHTML = "B";
    } else if (myScore >= 70 && myScore <= 79) {
      showGrade.innerHTML = "C";
    } else if (myScore >= 60 && myScore <= 69) {
      showGrade.innerHTML = "D";
    } else if (myScore >= 0 && myScore <= 59) {
      showGrade.innerHTML = "F";
    }
  }
}
