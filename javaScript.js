
const grid = document.querySelector('.grid');
// const listCell = document.querySelectorAll('div.cell');

for (let r = 0; r < 16; r++) {
    for (let c = 0; c < 16; c++) {
        let cell = document.createElement('div');
        cell.classList.add('cell');
        grid.appendChild(cell);
        cell.addEventListener('mousedown', ()=> {
            cell.style.backgroundColor = "white";
         },false)
        

    }
}



