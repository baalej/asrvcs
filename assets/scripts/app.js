// const caption = document.querySelector('.caption')
// const main = document.querySelector('main')
// const images = document.querySelectorAll('.gallery img')
// const imagesLength = images.length;
// let counter = 0

// function handleClick() {
//   images[counter].style.display = 'none'
//   counter = (counter + 1 < imagesLength) ? counter + 1 : 0
//   images[counter].style.display = 'inline'
//   const text = images[counter].getAttribute('data-caption')
//   caption.innerHTML = text
// }

// main.addEventListener('click', handleClick, false)

const previousButton = document.querySelector('.previous')
const nextButton = document.querySelector('.next')

function previous() {
  console.log('previous')
}

function next() {
  console.log('next')
}

previousButton.addEventListener('click', previous, false)
nextButton.addEventListener('click', next, false)
