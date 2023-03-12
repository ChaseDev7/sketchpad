const container = document.querySelector(".container");

// Creates the grid of 16 x 16 divs
for (i = 0; i < 256; i++) {
    const div = document.createElement("button");
    div.classList.add("btn-grid");
    div.style.height = "32px";
    div.style.width = "32px";
    div.style.margin = "0px";
    div.style.padding = "0px";
    div.style.borderRadius = "0px";
    div.textContent = "";
    div.style.backgroundColor = "lightblue";
    container.appendChild(div);
};

const buttons = document.querySelectorAll(".btn-grid");
const btnYellow = document.querySelector("btn-yellow")

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        button.style.backgroundColor = "black";
    })
})