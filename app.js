var inputTxtArea = document.querySelector("#input-txt-area");
var buttonTranslate = document.querySelector("#btn-translate");
var outputTxt = document.querySelector(".outputTxt");

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getURL(inputTxt) {
    var url = serverURL + "?text=" + inputTxt;
    return url;
}

function errorHandler(error) {
    console.log("Error: " + error);
}

function clickHandler() {
    var inputTxt = inputTxtArea.value;
    fetch(getURL(inputTxt))
    .then(response => response.json())
    .then(json => {
        var result = json.contents.translated;
        outputTxt.innerText = result;
    })
    .catch(errorHandler);
}

buttonTranslate.addEventListener("click", clickHandler);