const degreeInput = document.querySelector('.degree')
const submitBtn = document.querySelector('.submitBtn')
const coeffsDiv = document.querySelector('.coeffs')
const eqnDiv = document.querySelector('.equation')

let degree = 0;
let termsArray = []

class Term {
  constructor(power, coeff) {
    this.power = power
    this.coeff = coeff
  }
}

const appendInputs = () => {
  coeffsDiv.innerHTML = ""
  const coeffsForm = document.createElement("form")
  for (let i=0; i < degree; i++) {
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
  coeffsDiv.appendChild(coeffsForm)

  coeffSubmit.addEventListener('click', coeffInput)
}

const coeffInput = (event) => {
  event.preventDefault()

  for (let i=0; i<degree; i++) {
    coeffBox = document.getElementsByClassName(`${i}`)
    const newTerm = new Term(i, coeffBox[0].value)
    termsArray.push(newTerm);
  }
  
  showEqn()
}

const showEqn = () => {
  for (i=0; i<termsArray.length; i++) {
    console.log(termsArray[i])
    let coeffText = document.createElement("p")
    let powerText = document.createElement("sup")
    let termDiv = document.createElement("div")
    termDiv.className = "termDiv"
    let coeffValue = termsArray[i].coeff
    let powerValue = termsArray[termsArray.length-i-1].power
    console.log(coeffValue, powerValue)
    coeffText.innerText = `${coeffValue}x`
    powerText.innerText = powerValue
    const plusSign = document.createElement("p")
    if (coeffValue >= 0 && i != 0) {
      plusSign.innerText = "+"
      termDiv.appendChild(plusSign)
    }
    coeffText.appendChild(powerText)
    termDiv.appendChild(coeffText)
    eqnDiv.appendChild(termDiv)
  }
}

const submitDegree = (event) => {
  event.preventDefault()

  degree = degreeInput.value
  appendInputs()
}

submitBtn.addEventListener('click', submitDegree)
