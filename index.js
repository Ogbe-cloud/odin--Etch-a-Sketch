
let containerEl = document.querySelector('.container');
let canvasSize = 16;
let squareDiv;
let cell;

const grid = document.querySelector('.grid-change');
const reset = document.querySelector('.grid-reset');              

grid.addEventListener('click', ()=>{

	const numberOfGrid = prompt('Enter the number of grid you want');
	if(numberOfGrid){
		for (let i= 0; i< numberOfGrid; i++) {
			squareDiv = document.createElement('div');
		   squareDiv.classList.add('new')
	   
		   for (let j= 0; j< numberOfGrid; j++) {
				cell = document.createElement('div');
			   cell.classList.add('cell');
			   squareDiv.appendChild(cell);
	   
			   cell.addEventListener('mouseover',applyRandomColor)
			   
			   
		   }
	   
		   containerEl.appendChild(squareDiv)
	      
		   
	   }

	}else{
		alert('enter a number')
	}

})




function generateRandomColor(){
	const red= Math.floor(Math.random()*256);
	const green= Math.floor(Math.random()*256);
	const blue= Math.floor(Math.random()*256);

	const color = `rgb(${red},${green},${blue})`;
	return color
}
 const random=generateRandomColor();

 function applyRandomColor(event){
	const randomColor = generateRandomColor();
	const target = event.target;
	target.style.backgroundColor = randomColor ;
 }

 reset.addEventListener('click',()=>{
	while(containerEl.firstChild){
		containerEl.removeChild(containerEl.firstChild)
	}
	
	
})





