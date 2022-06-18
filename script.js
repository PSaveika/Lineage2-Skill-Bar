function change() {
    const elements = document.querySelectorAll("div.skill-bar");
    const elements2 = document.querySelectorAll("p.skill-number");
    const elements3 = document.querySelectorAll("i.lock");

    for(let element of elements) {
        element.classList.toggle("transformed-state");
    }

    for(let element of elements2) {
        element.classList.toggle("transformed-state2");
    }

    for(let element of elements3) {
        element.classList.toggle("transformed-state2");
    }
}


const rotateButton = document.querySelector("#rotate");
rotateButton.addEventListener("click", change);