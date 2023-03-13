const container = document.querySelector(".container");
const btnColor = document.createElement("button");
btnColor.style.backgroundColor = "black";

smallGrid();

const btnSmall = document.querySelector(".btn-small");

btnSmall.addEventListener("click", smallGrid);

// Function creates a 16x16 when btnSmall is pressed.
function smallGrid () {
    container.innerHTML = "";
    for (i = 0; i < 256; i++) {
        const div = document.createElement("button");
        div.classList.add("btn-grid-small");
        div.style.height = "32px";
        div.style.width = "32px";
        div.style.margin = "0px";
        div.style.padding = "0px";
        div.style.borderRadius = "0px";
        div.style.border = "0px";
        div.textContent = "";
        div.style.backgroundColor = "white";
        container.appendChild(div);
    };
    
    const buttons = document.querySelectorAll(".btn-grid-small");

    // Changes the color of the grid when clicked, and uses whichever color is selected.
    buttons.forEach((button) => {
    button.addEventListener("click", () => {
        button.style.backgroundColor = btnColor.style.backgroundColor;
        });
    });

    // Selects the color black to be used when btnBlack is clicked.
    const btnBlack = document.querySelector(".btn-black");

    btnBlack.addEventListener("click", runBlackButton);

    function runBlackButton() {
        btnColor.style.backgroundColor = "black";
        // Changes the color of the grid when clicked, and uses whichever color is selected.
        buttons.forEach((button) => {
            button.addEventListener("click", () => {
                button.style.backgroundColor = btnColor.style.backgroundColor;
            });
        });
    }

    // Selects the color yellow to be used when btnYellow is clicked.
    const btnYellow = document.querySelector(".btn-yellow");

    btnYellow.addEventListener("click", runYellowButton);

    function runYellowButton() {
        btnColor.style.backgroundColor = "yellow";
        // Changes the color of the grid when clicked, and uses whichever color is selected.
        buttons.forEach((button) => {
            button.addEventListener("click", () => {
                button.style.backgroundColor = btnColor.style.backgroundColor;
            });
        });
    }

    // Selects the color blue to be used when btnBlue is clicked.
    const btnBlue = document.querySelector(".btn-blue");

    btnBlue.addEventListener("click", runBlueButton);

    function runBlueButton() {
        btnColor.style.backgroundColor = "blue";
        // Changes the color of the grid when clicked, and uses whichever color is selected.
        buttons.forEach((button) => {
            button.addEventListener("click", () => {
                button.style.backgroundColor = btnColor.style.backgroundColor;
            });
        });
    }

    // Selects the color orange to be used when btnOrange is clicked.
    const btnOrange = document.querySelector(".btn-orange");

    btnOrange.addEventListener("click", runOrangeButton);

    function runOrangeButton() {
        btnColor.style.backgroundColor = "orange";
        // Changes the color of the grid when clicked, and uses whichever color is selected.
        buttons.forEach((button) => {
            button.addEventListener("click", () => {
                button.style.backgroundColor = btnColor.style.backgroundColor;
            });
        });
    }

    // Selects the color green to be used when btnGreen is clicked.
    const btnGreen = document.querySelector(".btn-green");

    btnGreen.addEventListener("click", runGreenButton);

    function runGreenButton() {
        btnColor.style.backgroundColor = "green";
        // Changes the color of the grid when clicked, and uses whichever color is selected.
        buttons.forEach((button) => {
            button.addEventListener("click", () => {
                button.style.backgroundColor = btnColor.style.backgroundColor;
            });
        });
    }

    // Selects the color red to be used when btnRed is clicked.
    const btnRed = document.querySelector(".btn-red");

    btnRed.addEventListener("click", runRedButton);

    function runRedButton() {
        btnColor.style.backgroundColor = "red";
        // Changes the color of the grid when clicked, and uses whichever color is selected.
        buttons.forEach((button) => {
            button.addEventListener("click", () => {
                button.style.backgroundColor = btnColor.style.backgroundColor;
            });
        });
    }

    // Selects the color white to erase other colors with btnEraser is clicked.
    const btnEraser = document.querySelector(".btn-eraser");

    btnEraser.addEventListener("click", runEraserButton);

    function runEraserButton() {
        btnColor.style.backgroundColor = "white";
        // Changes the color of the grid when clicked, and uses whichever color is selected.
        buttons.forEach((button) => {
            button.addEventListener("click", () => {
                button.style.backgroundColor = btnColor.style.backgroundColor;
            });
        });
    }

    // Generate a random color HEX number.
    function generateRandomColor () {
        // Generates a random HEX color.
        let numberMax = 0xFFFFFF;
        let randomNumber = Math.random() * numberMax;
        randomNumber = Math.floor(randomNumber);
        randomNumber = randomNumber.toString(16);
        let randomColor = randomNumber.padStart(6, 0);
        return `#${randomColor.toUpperCase()}`;
    }

    // Selects a random number to assign a color to be used when btnRandom is clicked.
    const btnRandom = document.querySelector(".btn-random");

    btnRandom.addEventListener("click", runRandomColorButton);

    // Generates random color to be used in the grid.
    function runRandomColorButton () {
        // Changes the color of the grid when clicked, and uses whichever color is selected.
        buttons.forEach((button) => {
            button.addEventListener("click", () => {
                button.style.backgroundColor = generateRandomColor();
            });
        });
    }

    btnRandom.removeEventListener;
}

const btnMedium = document.querySelector(".btn-medium");

btnMedium.addEventListener("click", mediumGrid);

// Function creates a 32x32 grid when btnMedium is pressed.
function mediumGrid () {
    container.innerHTML = "";
    for (i = 0; i < 1024; i++) {
        const div = document.createElement("button");
        div.classList.add("btn-grid-medium");
        div.style.height = "16px";
        div.style.width = "16px";
        div.style.margin = "0px";
        div.style.padding = "0px";
        div.style.borderRadius = "0px";
        div.style.border = "0px";
        div.textContent = "";
        div.style.backgroundColor = "white";
        container.appendChild(div);
    };
    
    const buttons = document.querySelectorAll(".btn-grid-medium");

    // Changes the color of the grid when clicked, and uses whichever color is selected.
    buttons.forEach((button) => {
    button.addEventListener("click", () => {
        button.style.backgroundColor = btnColor.style.backgroundColor;
        });
    });

    // Selects the color black to be used when btnBlack is clicked.
    const btnBlack = document.querySelector(".btn-black");

    btnBlack.addEventListener("click", runBlackButton);

    function runBlackButton() {
        btnColor.style.backgroundColor = "black";
        // Changes the color of the grid when clicked, and uses whichever color is selected.
        buttons.forEach((button) => {
            button.addEventListener("click", () => {
                button.style.backgroundColor = btnColor.style.backgroundColor;
            });
        });
    }

    // Selects the color yellow to be used when btnYellow is clicked.
    const btnYellow = document.querySelector(".btn-yellow");

    btnYellow.addEventListener("click", runYellowButton);

    function runYellowButton() {
        btnColor.style.backgroundColor = "yellow";
        // Changes the color of the grid when clicked, and uses whichever color is selected.
        buttons.forEach((button) => {
            button.addEventListener("click", () => {
                button.style.backgroundColor = btnColor.style.backgroundColor;
            });
        });
    }

    // Selects the color blue to be used when btnBlue is clicked.
    const btnBlue = document.querySelector(".btn-blue");

    btnBlue.addEventListener("click", runBlueButton);

    function runBlueButton() {
        btnColor.style.backgroundColor = "blue";
        // Changes the color of the grid when clicked, and uses whichever color is selected.
        buttons.forEach((button) => {
            button.addEventListener("click", () => {
                button.style.backgroundColor = btnColor.style.backgroundColor;
            });
        });
    }

    // Selects the color orange to be used when btnOrange is clicked.
    const btnOrange = document.querySelector(".btn-orange");

    btnOrange.addEventListener("click", runOrangeButton);

    function runOrangeButton() {
        btnColor.style.backgroundColor = "orange";
        // Changes the color of the grid when clicked, and uses whichever color is selected.
        buttons.forEach((button) => {
            button.addEventListener("click", () => {
                button.style.backgroundColor = btnColor.style.backgroundColor;
            });
        });
    }

    // Selects the color green to be used when btnGreen is clicked.
    const btnGreen = document.querySelector(".btn-green");

    btnGreen.addEventListener("click", runGreenButton);

    function runGreenButton() {
        btnColor.style.backgroundColor = "green";
        // Changes the color of the grid when clicked, and uses whichever color is selected.
        buttons.forEach((button) => {
            button.addEventListener("click", () => {
                button.style.backgroundColor = btnColor.style.backgroundColor;
            });
        });
    }

    // Selects the color red to be used when btnRed is clicked.
    const btnRed = document.querySelector(".btn-red");

    btnRed.addEventListener("click", runRedButton);

    function runRedButton() {
        btnColor.style.backgroundColor = "red";
        // Changes the color of the grid when clicked, and uses whichever color is selected.
        buttons.forEach((button) => {
            button.addEventListener("click", () => {
                button.style.backgroundColor = btnColor.style.backgroundColor;
            });
        });
    }

    // Selects the color white to erase other colors with btnEraser is clicked.
    const btnEraser = document.querySelector(".btn-eraser");

    btnEraser.addEventListener("click", runEraserButton);

    function runEraserButton() {
        btnColor.style.backgroundColor = "white";
        // Changes the color of the grid when clicked, and uses whichever color is selected.
        buttons.forEach((button) => {
            button.addEventListener("click", () => {
                button.style.backgroundColor = btnColor.style.backgroundColor;
            });
        });
    }

    // Generate a random color HEX number.
    function generateRandomColor () {
        // Generates a random HEX color.
        let numberMax = 0xFFFFFF;
        let randomNumber = Math.random() * numberMax;
        randomNumber = Math.floor(randomNumber);
        randomNumber = randomNumber.toString(16);
        let randomColor = randomNumber.padStart(6, 0);
        return `#${randomColor.toUpperCase()}`;
    }

    // Selects a random number to assign a color to be used when btnRandom is clicked.
    const btnRandom = document.querySelector(".btn-random");

    btnRandom.addEventListener("click", runRandomColorButton);

    // Generates random color to be used in the grid.
    function runRandomColorButton () {
        // Changes the color of the grid when clicked, and uses whichever color is selected.
        buttons.forEach((button) => {
            button.addEventListener("click", () => {
                button.style.backgroundColor = generateRandomColor();
            });
        });
    }

    btnRandom.removeEventListener;
}

const btnLarge = document.querySelector(".btn-large");

btnLarge.addEventListener("click", largeGrid);

// Function creates a 64x64 grid when btnLarge is pressed.
function largeGrid () {
    container.innerHTML = "";
    for (i = 0; i < 4096; i++) {
        const div = document.createElement("button");
        div.classList.add("btn-grid-large");
        div.style.height = "8px";
        div.style.width = "8px";
        div.style.margin = "0px";
        div.style.padding = "0px";
        div.style.borderRadius = "0px";
        div.style.border = "0px";
        div.textContent = "";
        div.style.backgroundColor = "white";
        container.appendChild(div);
    };
    
    const buttons = document.querySelectorAll(".btn-grid-large");

    // Changes the color of the grid when clicked, and uses whichever color is selected.
    buttons.forEach((button) => {
    button.addEventListener("click", () => {
        button.style.backgroundColor = btnColor.style.backgroundColor;
        });
    });

    // Selects the color black to be used when btnBlack is clicked.
    const btnBlack = document.querySelector(".btn-black");

    btnBlack.addEventListener("click", runBlackButton);

    function runBlackButton() {
        btnColor.style.backgroundColor = "black";
        // Changes the color of the grid when clicked, and uses whichever color is selected.
        buttons.forEach((button) => {
            button.addEventListener("click", () => {
                button.style.backgroundColor = btnColor.style.backgroundColor;
            });
        });
    }

    // Selects the color yellow to be used when btnYellow is clicked.
    const btnYellow = document.querySelector(".btn-yellow");

    btnYellow.addEventListener("click", runYellowButton);

    function runYellowButton() {
        btnColor.style.backgroundColor = "yellow";
        // Changes the color of the grid when clicked, and uses whichever color is selected.
        buttons.forEach((button) => {
            button.addEventListener("click", () => {
                button.style.backgroundColor = btnColor.style.backgroundColor;
            });
        });
    }

    // Selects the color blue to be used when btnBlue is clicked.
    const btnBlue = document.querySelector(".btn-blue");

    btnBlue.addEventListener("click", runBlueButton);

    function runBlueButton() {
        btnColor.style.backgroundColor = "blue";
        // Changes the color of the grid when clicked, and uses whichever color is selected.
        buttons.forEach((button) => {
            button.addEventListener("click", () => {
                button.style.backgroundColor = btnColor.style.backgroundColor;
            });
        });
    }

    // Selects the color orange to be used when btnOrange is clicked.
    const btnOrange = document.querySelector(".btn-orange");

    btnOrange.addEventListener("click", runOrangeButton);

    function runOrangeButton() {
        btnColor.style.backgroundColor = "orange";
        // Changes the color of the grid when clicked, and uses whichever color is selected.
        buttons.forEach((button) => {
            button.addEventListener("click", () => {
                button.style.backgroundColor = btnColor.style.backgroundColor;
            });
        });
    }

    // Selects the color green to be used when btnGreen is clicked.
    const btnGreen = document.querySelector(".btn-green");

    btnGreen.addEventListener("click", runGreenButton);

    function runGreenButton() {
        btnColor.style.backgroundColor = "green";
        // Changes the color of the grid when clicked, and uses whichever color is selected.
        buttons.forEach((button) => {
            button.addEventListener("click", () => {
                button.style.backgroundColor = btnColor.style.backgroundColor;
            });
        });
    }

    // Selects the color red to be used when btnRed is clicked.
    const btnRed = document.querySelector(".btn-red");

    btnRed.addEventListener("click", runRedButton);

    function runRedButton() {
        btnColor.style.backgroundColor = "red";
        // Changes the color of the grid when clicked, and uses whichever color is selected.
        buttons.forEach((button) => {
            button.addEventListener("click", () => {
                button.style.backgroundColor = btnColor.style.backgroundColor;
            });
        });
    }

    // Selects the color white to erase other colors with btnEraser is clicked.
    const btnEraser = document.querySelector(".btn-eraser");

    btnEraser.addEventListener("click", runEraserButton);

    function runEraserButton() {
        btnColor.style.backgroundColor = "white";
        // Changes the color of the grid when clicked, and uses whichever color is selected.
        buttons.forEach((button) => {
            button.addEventListener("click", () => {
                button.style.backgroundColor = btnColor.style.backgroundColor;
            });
        });
    }

    // Generate a random color HEX number.
    function generateRandomColor () {
        // Generates a random HEX color.
        let numberMax = 0xFFFFFF;
        let randomNumber = Math.random() * numberMax;
        randomNumber = Math.floor(randomNumber);
        randomNumber = randomNumber.toString(16);
        let randomColor = randomNumber.padStart(6, 0);
        return `#${randomColor.toUpperCase()}`;
    }

    // Selects a random number to assign a color to be used when btnRandom is clicked.
    const btnRandom = document.querySelector(".btn-random");

    btnRandom.addEventListener("click", runRandomColorButton);

    // Generates random color to be used in the grid.
    function runRandomColorButton () {
        // Changes the color of the grid when clicked, and uses whichever color is selected.
        buttons.forEach((button) => {
            button.addEventListener("click", () => {
                button.style.backgroundColor = generateRandomColor();
            });
        });
    }

    btnRandom.removeEventListener;
}