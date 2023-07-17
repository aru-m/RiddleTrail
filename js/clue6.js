let btn= document.querySelector('button');
let input = document.querySelector('input');

btn.onclick = function(){
    let answerString = input.value.toString().toLowerCase().trim();
    
    if(answerString.length==0){
        alert('Invalid input');
    }
    else if(answerString=="fire"){
        window.location.href="./end.html"
    }else{
        alert('wrong answer');
    }
}