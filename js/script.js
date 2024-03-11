let congratulation = document.querySelector('.congratulation')
let yourName = document.getElementById('yourName')
let congratulateButton = document.getElementById('congratulateButton')
let congratulateContainer = document.getElementsByClassName('congratulate__container')
congratulateButton.addEventListener('click', () => {
    congratulation.classList.add('pressed')
    console.log(congratulation)
    congratulation.textContent = `Милая ${yourName.value} !`
})