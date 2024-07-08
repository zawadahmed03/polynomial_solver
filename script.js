const degree = document.querySelector('.degree')
let degreeCopy = 0;
const submitBtn = document.querySelector('.submitBtn')

const coeffs = document.querySelector('.coeffs')



const appendInputs = (num) => {
  coeffs.innerHTML = ""
  const coeffsForm = document.createElement("form")
  for (let i=0; i < num; i++) {
    const inputBox = document.createElement('input')
    inputBox.type = "number"
    inputBox.value = 0 
    inputBox.className = `${i}`
    coeffsForm.appendChild(inputBox)
  }
  const coeffSubmit = document.createElement('button')
  coeffSubmit.type = "submit"
  coeffSubmit.className = 'coeffSubmit'
  coeffSubmit.innerHTML = 'Submit'
  coeffsForm.appendChild(coeffSubmit)
  coeffs.appendChild(coeffsForm)

  coeffSubmit.addEventListener('click', coeffInput)
}

const coeffInput = (event) => {
  event.preventDefault()

  let coeffs = []

  for (let i=0; i<degreeCopy; i++) {
    coeffBox = document.getElementsByClassName(`${i}`)
    coeffs[i] = coeffBox[0].value
  }
  console.log(coeffs)
}

const submitDegree = (event) => {
  event.preventDefault()
  appendInputs(degree.value)
  degreeCopy = degree.value
}

submitBtn.addEventListener('click', submitDegree)
