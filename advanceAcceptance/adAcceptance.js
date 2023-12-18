var studentGrade = document.getElementById("grade");
var studentAccumulatedScore = document.getElementById("accumulatedScore");
var studentProgram = document.getElementById("program");
var getStatus = document.getElementById("status");

function acceptanceSystem() {
  var getGrade = studentGrade.value;
  var getProgram = studentProgram.value;
  var getScore = studentAccumulatedScore.value;

  if (getProgram === "" || getGrade === "" || getScore === "") {
    getStatus.innerHTML =
      "Please enter the necessary information before checking";
  } else {
    if (getGrade >= 85 && getProgram === "Science" && getScore >= 800) {
      getStatus.innerHTML = "Accepted into Science Program";
    } else if (getGrade >= 80 && getProgram === "Commerce" && getScore >= 800) {
      getStatus.innerHTML = "Accepted into Commerce Program";
    } else if (getGrade >= 75 && getProgram === "Art" && getScore >= 800) {
      getStatus.innerHTML = "Accepted into Art Program";
    } else {
      getStatus.innerHTML = "Not accepted into " + getProgram + " program";
    }
  }
}
