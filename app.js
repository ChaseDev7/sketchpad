const container = document.querySelector(".container");
const btnSize = document.querySelector(".size");

btnSize.addEventListener("click", addCode);

function addCode () {
    for (i = 0; i < 256; i++) {
        const div = document.createElement("div");
        div.classList.add(".div");
        div.style.height = "32px";
        div.style.width = "32px";
        div.textContent = i;
        container.appendChild(div);
    };
    btnSize.removeEventListener("click", addCode);
};

const divHover = document.querySelector(".div");

divHover.addEventListener()