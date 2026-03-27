const button = document.querySelector("#button");
const main = document.getElementById("floatyFakPlace");
const divs = Array.from(main.children);

document.addEventListener("DOMContentLoaded", revokeAllDivs)
button.addEventListener("click", randomDivs);

function getRandomPos() {
    return [Math.random()*window.innerWidth, Math.random()*window.innerHeight];
}

function revokeAllDivs(e) {
    divs.forEach(div => {
        
        div.remove();
    });
}

function randomDivs(e) {
    pos = getRandomPos();
    const div = divs[Math.floor(Math.random()*divs.length)]
    div.style.position = "absolute";
    div.style.left = pos[0] + "px";
    div.style.top = pos[1] + "px";
    main.appendChild(div.cloneNode(true))
}