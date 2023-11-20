const form = document.querySelector(".inputSabmit");
const inform = document.querySelector(".text-inform");

form.addEventListener("submit", handlerChecker);

function handlerChecker(evt) {
    evt.preventDefault();
 console.log("h");
    if (form.elements.inpt.value === stringReverse(form.elements.inpt.value)) {
       
        inform.innerHTML = `It's palindrome`;
        inform.style.color = "green";
    } else {
         inform.innerHTML = `It isn't palindrome`;
        inform.style.color = "red";
        
    }
    form.elements.inpt.value = "";
}

function stringReverse(str) {
    let splitString = str.split(""); 
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("");
    return joinArray;
}