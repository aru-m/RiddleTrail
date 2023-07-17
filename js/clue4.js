let input = document.querySelector('input');
let btn = document.querySelector('button');

btn.onclick = function () {

    let answerString = input.value.toString().toLowerCase();

    if (answerString.length == 0) {
        alert('Invalid input');
    }
    else if (answerString == "magenta".toLowerCase().trim()) {
        window.location.href="./clue5.html"
    } else {
        alert('Oops! wrong answer');
    }

}