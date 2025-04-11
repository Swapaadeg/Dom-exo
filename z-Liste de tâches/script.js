function addTask() {
    const input = document.getElementById("task-input");
       const taskText = input.value.trim()

    if (taskText !== "") {
        const li = document.createElement('li');
        li.textContent = taskText;

        const endBtn = document.createElement('button')
        endBtn.textContent = 'Terminé'
        endBtn.id = 'endBtn'
        endBtn.style.backgroundColor = 'green'
        endBtn.onclick = function() {
            moveToCompleted(li)
        }

        const supprBtn = document.createElement('button')
        supprBtn.textContent = 'Supprimer'
        supprBtn.id = 'supprBtn'
        supprBtn.style.backgroundColor = 'red'
        endBtn.onclick = function() {
            li.remove()
        }

        const editBtn = document.createElement('button')
        editBtn.textContent = 'Modifier'
        editBtn.id = 'editBtn'
        editBtn.style.backgroundColor = 'yellow'
        editBtn.style.color = 'black'
        editBtn.onclick = function() {
            editTask(span, editBtn)
        }

        li.appendChild(endBtn)
        li.appendChild(supprBtn)
        li.appendChild(editBtn)

        const taskList = document.getElementById("task-list");
        taskList.appendChild(li);
        input.value = "";
    }
}

