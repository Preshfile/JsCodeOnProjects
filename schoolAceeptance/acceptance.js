var studentGrade = document.getElementById("grade");
var studentProgram = document.getElementById("program");
var getStatus = document.getElementById("status");

function acceptanceSystem() {
  var getGrade = studentGrade.value;
  var getProgram = studentProgram.value;

  if (getProgram === "" || getGrade === "") {
    getStatus.innerHTML =
      "Please enter the necessary information before checking";
  } else {
    if (getGrade >= 85 && getProgram === "Science") {
      getStatus.innerHTML = "Accepted into Science Program";
    } else if (getGrade >= 80 && getProgram === "Commerce") {
      getStatus.innerHTML = "Accepted into Commerce Program";
    } else if (getGrade >= 75 && getProgram === "Art") {
      getStatus.innerHTML = "Accepted into Art Program";
    } else {
      getStatus.innerHTML = "Not accepted into " + getProgram + " program";
    }
  }
}
