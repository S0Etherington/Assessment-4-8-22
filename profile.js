let colorButton = document.querySelector('#color')
let placeButton = document.querySelector('#place')
let ritualButton = document.querySelector('#ritual')

// const buttonAlert = (evt) => {
//     let favButton = document.querySelector('.favbutton')
//     alert(`My favorite ${favButton.name} is ${favButton.value}.`)
// }

const colorButtonFunc = (evt) => {
    alert ('My favorite color is green.')
}

const placeButtonFunc = (evt) => {
    alert ('My favorite place is Stawberry Reservior.')
}

const ritualButtonFunc = (evt) => {
    alert ('My favorite ritual is singing to the sun stone in hopes that it will bring the downfall of my enemy.')
}

colorButton.addEventListener('click', colorButtonFunc)
placeButton.addEventListener('click', placeButtonFunc) 
ritualButton.addEventListener('click', ritualButtonFunc)