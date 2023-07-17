let input = document.querySelector('input');
let btn = document.querySelector('button');


btn.onclick = function () {

    let answerString = input.value.toString().toLowerCase();
    if (answerString.length == 0) {
        alert('Invalid input');
    }
    else if (answerString == "mouse".toLowerCase().trim()) {
        window.location.href="./clue4.html"
    } else {
        alert('Oops! wrong answer');
    }

}