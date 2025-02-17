const container = document.querySelector('#container');
 
for(let i = 1; i <= 120; i++){
const gridBoxes = document.createElement('div');
gridBoxes.classList.add("gridBoxes");
gridBoxes.style.height = "15px";
gridBoxes.style.width = "15px";
container.appendChild(gridBoxes);
};
