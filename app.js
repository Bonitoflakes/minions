const textarea = document.querySelector('.input');
const bananaOutput = document.querySelector('.output');
const translateBtn = document.querySelector('.translate');


const minionUrl = 'https://api.funtranslations.com/translate/minion.json'
const pigLatin = 'https://api.funtranslations.com/translate/pig-latin.json'

function modifiedUrl(url) {
    let userInput = textarea.value;
            console.log(userInput);
    return url + "?text=" + userInput;
}

textarea.onkeydown = e => {
    if (e.keyCode == 13)
        displayOutput();
};
translateBtn.addEventListener("click", displayOutput);

function errorHandler(error) {
    console.log("error: ", error);
    console.log("Something went wrong, please try again after sometime");
    bananaOutput.innerText = 'Please try again in an hour or so';
}

function displayOutput() {

    let url = modifiedUrl(minionUrl);
    console.log(url);
    fetch(url).then(response => response.json())
        .then(data => {
            console.log(data)
            return data;
        })
        .then(data => bananaOutput.innerText = data.contents.translated)
        .catch(errorHandler)


}
