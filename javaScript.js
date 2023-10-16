const grid=document.querySelector('.grid');
for(let r=0;r<16;r++){
    for(let c=0;c<16;c++){
        const cell=document.createElement('div');
        cell.classList.add('cell');
        grid.appendChild(cell);
    }
}