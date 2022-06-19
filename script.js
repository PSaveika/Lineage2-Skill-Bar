function change() {
    const elements = document.querySelectorAll("div.skill-bar");
    const elements2 = document.querySelectorAll("div.skill");
    const elements3 = document.querySelectorAll("div.lock-unlocked");
    const elements4 = document.querySelectorAll("div.lock-locked");
    const elements5 = document.querySelectorAll("div.rotate");
    const elements6 = document.querySelectorAll("div.bar-number");

    for(let element of elements) {
        element.classList.toggle("transformed-state");
    }

    for(let element of elements2) {
        element.classList.toggle("transformed-state2");
    }

    for(let element of elements3) {
        element.classList.toggle("transformed-state3");
    }

    for(let element of elements4) {
        element.classList.toggle("transformed-state3");
    }

    for(let element of elements5) {
        element.classList.toggle("transformed-state3");
    }

    for(let element of elements6) {
        element.classList.toggle("transformed-state3");
    }

}

const rotateButton = document.querySelector("#rotate");
rotateButton.addEventListener("click", change);


function activate() {

    const activated = document.querySelectorAll("div.active");
    const activatedInside = document.querySelectorAll("div.active-inside");
    const side1 = document.querySelectorAll("div.side-1");
    const side2 = document.querySelectorAll("div.side-2");
    const side3 = document.querySelectorAll("div.side-3");
    const side4 = document.querySelectorAll("div.side-4");

    const glareMove = document.querySelectorAll("div.glare-move");

    const glareLeft = document.querySelectorAll("div.glareLeft-move");
    const glareBot = document.querySelectorAll("div.glareBot-move");
    const glareRight = document.querySelectorAll("div.glareRight-move");
    const glareTop = document.querySelectorAll("div.glareTop-move");
    


    for(let element of activated) {
        element.classList.toggle("activated");
    }

    for(let element of activatedInside) {
        element.classList.toggle("activated-inside");
    }

    for(let element of side1) {
        element.classList.toggle("activated-side1");
    }

    for(let element of side2) {
        element.classList.toggle("activated-side2");
    }

    for(let element of side3) {
        element.classList.toggle("activated-side3");
    }

    for(let element of side4) {
        element.classList.toggle("activated-side4");
    }


    for(let element of glareMove) {
        element.classList.toggle("activated-glareMove");
    }

    for(let element of glareLeft) {
        element.classList.toggle("activated-glareLeft");
    }

    for(let element of glareBot) {
        element.classList.toggle("activated-glareBot");
    }

    for(let element of glareRight) {
        element.classList.toggle("activated-glareRight");
    }

    for(let element of glareTop) {
        element.classList.toggle("activated-glareTop");
    }


}

const skill12Btn = document.querySelector("#skill-12");
skill12Btn.addEventListener("click", activate);



var unlocked = document.querySelector("div.lock-unlocked");
var locked = document.querySelector("div.lock-locked");

unlocked.addEventListener("click", function() {
    unlocked.style.display = "none";
    locked.style.display = "inline";
})

locked.addEventListener("click", function() {
    locked.style.display = "none";
    unlocked.style.display = "inline";
})



