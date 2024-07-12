const degreeInput = document.querySelector('.degree')
const submitBtn = document.querySelector('.submitBtn')
const coeffsDiv = document.querySelector('.coeffs')
const eqnDiv = document.querySelector('.equation')

let degree = 0;
let coeffs = []

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
    coeffs[i] = coeffBox[0].value
  }
  
  showEqn()
}

const showEqn = () => {
  for (let i=0; i<degree; i++) {
    let coeff = document.createElement("p")
    let power = document.createElement("sup")
    power.innerText = degree-(i+1)
    coeff.innerText = `${coeffs[i]}x`
    if (i+1 != degree) {
      coeff.appendChild(power)
    }
    if (coeffs[i+1] != 0) {

    eqnDiv.appendChild(coeff)
    }
    if (coeffs[i+1]>0 && i != degree-1) {
      const plus_sign = document.createElement("p")
      plus_sign.innerText = "+"
      eqnDiv.appendChild(plus_sign)
    }
  }
}

const submitDegree = (event) => {
  event.preventDefault()

  degree = degreeInput.value
  appendInputs()
}

submitBtn.addEventListener('click', submitDegree)
