const input = document.createElement('input')
input.id = 'userInput'
input.placeholder = 'Tapez quelque chose...'
document.body.append(input)

const paragraph = document.createElement('p')
paragraph.id = "paragraph"
paragraph.textContent = ''
document.body.append(paragraph)

const button = document.createElement('button')
button.textContent = 'Valider'
document.body.append(button)


button.addEventListener('click', function() {
    const userInput =input.value
    if (userInput === 'Bonjour'){
        paragraph.textContent = 'Bonne journée'
        paragraph.style.color = 'green'
  } else if (userInput === 'Au revoir') {
        paragraph.textContent = 'A la prochaine!'
        paragraph.style.color = 'green'
  }else {
    paragraph.textContent = 'Je ne comprends pas'
    paragraph.style.color = 'red'
  }
 })

