const input1 = document.createElement('input')
input1.type = 'number'
input1.id = 'number1'
input1.style.marginRight = '10rem'
input1.style.width = '40%'
document.body.append(input1)

const input2 = document.createElement('input')
input2.type = 'number'
input2.style.width = '40%'
input2.id = 'number2'
document.body.append(input2)

const result = document.createElement('p')
result.textContent = 'Résultat : '
document.body.append(result)

const button = document.createElement('button')
button.textContent = 'Calculer'
document.body.append(button)

button.addEventListener('click', function() {
    const number1 = parseFloat(input1.value) || 0
    const number2 = parseFloat(input2.value) || 0
    result.textContent = 'Résultat : ' + (number1 + number2)
})