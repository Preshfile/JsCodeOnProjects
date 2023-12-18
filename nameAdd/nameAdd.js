var getNames = document.getElementById("name");
var button = document.getElementById("add");
var outputMessage = document.getElementById("message");
var displayName = document.getElementById("displayNameList");

var storeNames = [];

const pushNames = () => {
  var names = getNames.value;

  if (names === "") {
    outputMessage.style.color = "red";
    outputMessage.innerHTML = "Empty field! Please enter a name";
  } else {
    storeNames.push(names);
    displayNameList();
    outputMessage.style.color = "green";
    outputMessage.innerHTML = "Name add was successful!";
    getNames.value = "";
  }
};

const displayNameList = () => {
  displayName.innerHTML = "";

  for (var i = 0; i < storeNames.length; i++) {
    var createList = document.createElement("li");
    createList.textContent = storeNames[i];
    displayName.appendChild(createList);
  }
};
