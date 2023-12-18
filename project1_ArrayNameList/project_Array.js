var getNames = document.getElementById("names");
var addNames = document.getElementById("add");
var nameListOutput = document.getElementById("nameList");

var arrayOfNames = [];

const addNamesItem = function () {
  var nameEntered = getNames.value;
  arrayOfNames.push(nameEntered);
  getNames.value = "";

  renderNamesListOutput();
};

const renderNamesListOutput = function () {
  nameListOutput.innerHTML = "";

  // Populate
  arrayOfNames.forEach(function (name) {
    var listItem = document.createElement("li");
    listItem.textContent = name;
    nameListOutput.appendChild(listItem);
  });
};
