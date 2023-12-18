let carList = [];
let carPrototype = {
  carModel: null,
  carColor: null,
  carYear: null,
  carMake: null,
};
//to display the list of car added in the array
displayList = () => {
  console.log(carList);
};
const addToListBtn = document.getElementById("addToListBtn");
const makeTxt = document.getElementById("make");
const modelTxt = document.getElementById("model");
const colorTxt = document.getElementById("color");
const yearTxt = document.getElementById("year");
const postMessage = document.getElementById("message");

addToListBtn.addEventListener("click", function () {
  if (
    makeTxt.value === "" ||
    modelTxt.value === "" ||
    colorTxt.value === "" ||
    yearTxt.value === ""
  ) {
    postMessage.style.color = "red";
    postMessage.innerHTML = "Please fill in the empty fields";
  } else {
    let newCar = Object.create(carPrototype);
    newCar.carModel = modelTxt.value;
    newCar.carColor = colorTxt.value;
    newCar.carYear = yearTxt.value;
    newCar.carMake = makeTxt.value;
    carList.push(newCar);
    displayList();

    // Clear the values after the operation
    makeTxt.value = "";
    modelTxt.value = "";
    colorTxt.value = "";
    yearTxt.value = "";

    postMessage.style.color = "blue";
    postMessage.innerHTML = "Success! Object added.";
  }
});
