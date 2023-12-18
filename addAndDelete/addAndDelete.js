let getName = document.getElementById("names");
let addButton = document.getElementById("add");
let ulList = document.getElementById("list");
let arrayNames = [];

addButton.addEventListener("click", function () {
  arrayNames.push(getName.value);
  console.log(arrayNames);
  pushToList(arrayNames);
});

pushToList = (pushedNames) => {
  let li = document.createElement("li");
  let deleteButton = document.createElement("button");

  deleteButton.setAttribute("class", "deleteButton hideDelete");
  deleteButton.textContent = "Delete";

  let showDelete = false;

  let i = 0;

  while (pushedNames.length > i) {
    li.textContent = pushedNames[i];
    i++;
  }
  ulList.appendChild(li);

  li.onclick = function () {
    console.log(arrayNames);
    console.log(li.textContent);
    li.appendChild(deleteButton);
    deleteButton.classList.toggle("showDelete");
    deleteButton.classList.toggle("hideDelete");
  };

  deleteButton.onclick = function () {
    li.remove();
  };
};
