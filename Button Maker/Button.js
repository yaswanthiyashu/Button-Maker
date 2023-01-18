 let firstInputElement = document.getElementById("firstInput");
 let secondInputElement = document.getElementById("secondInput");
 let thirdInputElement = document.getElementById("thirdInput");
 let fourthInputElement = document.getElementById("fourthInput");
 let fifthInputElement = document.getElementById("fifthInput");
 let sixthInputElement = document.getElementById("sixthInput");
 let mainButtonElement = document.getElementById("mainButton");

 function ButtonClick() {
    firstInputValue = firstInputElement.value;
    secondInputValue = secondInputElement.value;
    thirdInputValue = thirdInputElement.value;
    fourthInputValue = fourthInputElement.value;
    fifthInputValue = fifthInputElement.value;
    sixthInputValue = sixthInputElement.value;

    mainButtonElement.style.backgroundColor = firstInputValue;
    mainButtonElement.style.color = secondInputValue;
    mainButtonElement.style.fontSize = thirdInputValue;
    mainButtonElement.style.fontWeight = fourthInputValue;
    mainButtonElement.style.padding = fifthInputValue;
    mainButtonElement.style.borderRadius = sixthInputValue;

 }