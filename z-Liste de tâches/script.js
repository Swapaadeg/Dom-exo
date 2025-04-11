function addTask() {
    const input = document.getElementById('task-input');
       const taskText = input.value.trim()

    if (taskText !== "") {

        const li = document.createElement('li');

        const span = document.createElement("span");
        span.textContent = taskText;

        const terminé = document.createElement('button')
        terminé.textContent = 'Terminé'
        terminé.classList = 'terminé'
        terminé.style.backgroundColor = 'green'
        terminé.onclick = function() {
            moveToCompleted(li)
        }

        const supprimer = document.createElement('button')
        supprimer.textContent = 'Supprimer'
        supprimer.classList = 'supprimer'
        supprimer.style.backgroundColor = 'red'
        supprimer.onclick = function() {
            li.remove()
        }

        const modifier = document.createElement('button')
        modifier.textContent = 'Modifier'
        modifier.classList = 'modifier'
        modifier.style.backgroundColor = 'yellow'
        modifier.style.color = 'black'
        modifier.onclick = function() {
            editTask(span, modifier)
        }

        li.appendChild(span)
        li.appendChild(terminé)
        li.appendChild(supprimer)
        li.appendChild(modifier)


        document.querySelector('.task-list').appendChild(li);
        input.value = '';
    }
}

function moveToCompleted(li) {
    const completedList = document.querySelector('.completed-tasks');
    const terminé = li.querySelector('.terminé')
    const modifier = li.querySelector('.modifier')

    if (terminé) terminé.remove()
    if (modifier) modifier.remove()
    
    completedList.appendChild(li)
}


