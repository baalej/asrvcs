const previousButton = document.querySelector('.previous')
const nextButton = document.querySelector('.next')
const gallery = document.querySelector('.gallery')

function previous() {
  console.log('previous')

}

function next() {
  console.log('next')
}

previousButton.addEventListener('click', previous, false)
nextButton.addEventListener('click', next, false)
