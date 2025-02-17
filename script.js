const container = document.querySelector('#container');
 
for(let i = 1; i <= 6500; i++){
const gridBoxes = document.createElement('div');
gridBoxes.classList.add("gridBoxes");
gridBoxes.style.height = "16px";
gridBoxes.style.width = "16px";
container.appendChild(gridBoxes);
};
