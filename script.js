//this section creates a board with black squares

function blackBoard() {
	
	let board = document.querySelector('.board');
	const rate = document.querySelector('input').value;
	board.style.gridTemplateColumns = `repeat(${rate}, 1fr)`;
	let multiplier = rate;
	let divAmount = multiplier * multiplier;

	for(i = 0; i < divAmount; i++) {
		let grid = document.querySelector('.board');
		let divs = grid.getElementsByTagName('div');
		for(div of divs){
			div.remove();		
		}
	}
	

	for(i = 0; i < divAmount; i++) {
		let square = document.createElement('div');
		square.style.backgroundColor = 'white';
		square.addEventListener('click', ()=> {
			square.style.backgroundColor = "black";});
		
			
		board.insertAdjacentElement('beforeend',square);
	}
}

let blackButton = document.getElementById('black');
blackButton.addEventListener('click', blackBoard);


//this section creates a board with red squares

function redBoard() {

	let board = document.querySelector('.board');
	const rate = document.querySelector('input').value;
	board.style.gridTemplateColumns = `repeat(${rate}, 1fr)`;
	let multiplier = rate;
	let divAmount = multiplier * multiplier;

	for(i = 0; i < divAmount; i++) {
		let grid = document.querySelector('.board');
		let divs = grid.getElementsByTagName('div');
		for(div of divs){
			div.remove();		
		}
	}
	
	
	
	for(i = 0; i < divAmount; i++) {
		let square = document.createElement('div');
		square.style.backgroundColor = 'white';
		square.addEventListener('click', ()=> {
			square.style.backgroundColor = "red";});
		
		
			
		board.insertAdjacentElement('beforeend',square);
	}
}

let redButton = document.getElementById('red');
redButton.addEventListener('click', redBoard);


//this section allows users to reset the grid back to a blank canvas

let resetButton = document.getElementById('reset');
resetButton.style.color = 'red';

function clearButton() {
	for(i = 0; i < 256; i++) {
		let grid = document.querySelector('.board');
		let divs = grid.getElementsByTagName('div');
		for(div of divs){
			div.remove();		
		}
	}
}

resetButton.addEventListener('click', clearButton);


//this section of code creates a board with squares with a random color

function randomColors(){
	
	//this section gets a random Number
	
	function getRandomNum(min, max) {
  			let newNumber = Math.random() * (max - min) + min;
  			return Math.floor(newNumber);
			}
	
	let random_number = getRandomNum(0,6);
	
	//this section picks a color from array based using random number as index	
  	
	const choices = ['red','blue','green','yellow','orange','purple','black']
	let colorChoice = choices[random_number];
	
	//this section actually creates a board with squares utilizing the chosen color 
	
	let board = document.querySelector('.board');
	const rate = document.querySelector('input').value;
	board.style.gridTemplateColumns = `repeat(${rate}, 1fr)`;
	let multiplier = rate;
	let divAmount = multiplier * multiplier;
	
	
	for(i = 0; i < divAmount; i++) {
		let grid = document.querySelector('.board');
		let divs = grid.getElementsByTagName('div');
		for(div of divs){
			div.remove();		
		}
	}
	
	
	for(i = 0; i < divAmount; i++) {
		let square = document.createElement('div');
		square.style.backgroundColor = 'white';
		square.addEventListener('click', ()=> {
			square.style.backgroundColor = `${colorChoice}`;});
		
	
			
		board.insertAdjacentElement('beforeend',square);
	}	
}

let randomButton = document.getElementById('colors');
randomButton.addEventListener('click', randomColors);




