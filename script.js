const degree = document.querySelector('.degree')
const submitBtn = document.querySelector('.submitBtn')

const coeffs = document.querySelector('.coeffs')

const appendInputs = (num) => {
  coeffs.innerHTML = ""
  for (let i=0; i < num; i++) {
    const inputBox = document.createElement('input')
    inputBox.className = `${i}`
    coeffs.appendChild(inputBox)
  }
  const coeffSubmit = document.createElement('button')
  coeffSubmit.className = 'coeffSubmit'
  coeffSubmit.innerHTML = 'Submit'
  coeffs.appendChild(coeffSubmit)
}

const submitDegree = (event) => {
  event.preventDefault()
  appendInputs(degree.value)
}

submitBtn.addEventListener('click', submitDegree)
