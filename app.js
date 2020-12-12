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
    let abcd = textarea.value;
    textarea.value =''
    let url = modifiedUrl(minionUrl);
    fetch(url).then(response => response.json())
        .then(data => console.log(data))
        .then(json => bananaOutput.innerText = 'For' + abcd +  'you say' + json.contents.translated)
        .catch(errorHandler)


}