console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submit');
}

const complimentMouse = (evt) => {
	alert('That shirt looks great on you. Is it new?')
}

let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

let duckCat = document.querySelector('#duckCat')

duckCat.addEventListener('mouseover', complimentMouse)