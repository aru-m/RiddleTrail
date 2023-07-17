document.querySelector('img').onclick = function () {
    window.open('de.html');
};

let input = document.querySelector('input');
let btn = document.querySelector('button');

btn.onclick = function () {

    let answerString = input.value.toString().toLowerCase();

    if (answerString.length == 0) {
        alert('Invalid input');
    }
    else if (answerString == "chicago".toLowerCase().trim()) {
        window.location.href="./clue2.html"
    } else {
        alert('Oops! wrong answer');
    }
}