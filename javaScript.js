
let grid = document.querySelector('.grid');
let btn = document.querySelector('.customGrid');
let randomBtn = document.querySelector('.randomColors');
let isRandom = false;
// const listCell = document.querySelectorAll('div.cell');
const randColor = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0').toUpperCase();
}
let x = 12;

function printGrid(x) {
    grid.innerHTML = '';
    grid.style.gridTemplateColumns = `repeat(${x}, 5fr)`;
    grid.style.gridTemplateRows = `repeat(${x}, 5fr)`;
    for (let r = 0; r < x; r++) {
        for (let c = 0; c < x; c++) {
            let cell = document.createElement('div');
            cell.classList.add('cell');
            grid.appendChild(cell);
            cell.addEventListener('mouseover', () => {

                cell.style.backgroundColor = isRandom ? randColor() : "white";

            },
                false,
            );
        }
    }
}

function userResponse() {
    let userInput
    let response = prompt("Please enter the number of squares for the grid");
    if (response != null) {
        if (response === '') {
            alert("Please enter a number less than 100");
            return;
        }
        userInput = parseInt(response);
        if (userInput > 100) {
            alert("Please enter a number less than 100");
        }
        else {
            x = userInput;
            printGrid(x);
        }
    }

}
randomBtn.addEventListener('click', () => {
    isRandom = !isRandom
});

btn.addEventListener('click', userResponse, false);

printGrid(x);