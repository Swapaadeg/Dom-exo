function createButton(text, color, onClick) {
    const btn = document.createElement('button');
    btn.textContent = text;
    btn.style.backgroundColor = color;
    btn.style.color = (color === 'yellow' || color === 'orange') ? 'black' : 'white';
    btn.onclick = onClick;
    return btn;
}

function formatDateFR(dateStr) {
    if (!dateStr) return "";
    const [year, month, day] = dateStr.split("-");
    return `${day}/${month}/${year}`;
}

function getDateColor(dateStr) {
    if (!dateStr) return 'black';

    const today = new Date();
    const taskDate = new Date(dateStr);

    today.setHours(0, 0, 0, 0);
    taskDate.setHours(0, 0, 0, 0);

    if (taskDate < today) return 'red';
    if (taskDate.getTime() === today.getTime()) return 'orange';
    return 'green';
}

function addTask() {
    const input = document.getElementById('task-input');
    const dateInput = document.getElementById('task-date');
    const taskText = input.value.trim();
    const taskDate = dateInput.value;
    const errorMessage = document.getElementById('error-message');

    if (!taskText) {
        errorMessage.textContent = "Veuillez entrer une tâche.";
        return;
    }

    const isDuplicate = Array.from(document.querySelectorAll('li span'))
        .some(span => span.textContent === taskText);

    if (isDuplicate) {
        errorMessage.textContent = "Cette tâche existe déjà.";
        return;
    }

    errorMessage.textContent = "";

    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = taskText;

    const dateSpan = document.createElement('span');
    dateSpan.className = "task-date";
    dateSpan.textContent = " à faire pour le " + formatDateFR(taskDate);
    dateSpan.style.color = getDateColor(taskDate);

    const terminé = createButton('Terminé', 'green', () => moveToCompleted(li));
    const supprimer = createButton('Supprimer', 'red', () => li.remove());
    const modifier = createButton('Modifier', 'yellow', () => editTask(span, modifier));

    li.append(span, dateSpan, terminé, supprimer, modifier);
    document.querySelector('.task-list').appendChild(li);
    input.value = '';
    saveTasks();
}

function moveToCompleted(li) {
    li.querySelectorAll('button').forEach(btn => btn.remove());

    const enCours = createButton('En cours', 'orange', () => moveToInProgress(li));
    const supprimer = createButton('Supprimer', 'red', () => li.remove());

    li.append(enCours, supprimer);
    document.querySelector('.completed-tasks').appendChild(li);
}

function moveToInProgress(li) {
    const span = li.querySelector('span');
    li.innerHTML = '';

    const terminé = createButton('Terminé', 'green', () => moveToCompleted(li));
    const supprimer = createButton('Supprimer', 'red', () => li.remove());
    const modifier = createButton('Modifier', 'yellow', () => editTask(span, modifier));

    li.append(span, terminé, supprimer, modifier);
    document.querySelector('.task-list').appendChild(li);
}

function editTask(span, modifierBtn) {
    const errorMessage = document.getElementById('error-message');
    const input = document.createElement('input');
    input.type = 'text';
    input.value = span.textContent;

    span.replaceWith(input);
    modifierBtn.textContent = 'Valider';

    modifierBtn.onclick = () => {
        const newText = input.value.trim();
        if (!newText) {
            errorMessage.textContent = "Le texte de la tâche ne peut pas être vide.";
            return;
        }

        const isDuplicate = Array.from(document.querySelectorAll('li span'))
            .some(other => other.textContent === newText && other !== span);

        if (isDuplicate) {
            errorMessage.textContent = "Cette tâche existe déjà.";
            return;
        }

        errorMessage.textContent = "";

        const newSpan = document.createElement('span');
        newSpan.textContent = newText;
        input.replaceWith(newSpan);

        modifierBtn.textContent = 'Modifier';
        modifierBtn.onclick = () => editTask(newSpan, modifierBtn);
    };
}

function saveTasks() {
    const tasks = [];

    document.querySelectorAll('.task-list li').forEach(li => {
        const textSpan = li.querySelector('span'); 
        const dateSpan = li.querySelector('.task-date');
        tasks.push({
            text: textSpan.textContent.trim(),
            date: dateSpan ? dateSpan.textContent.trim() : '',
            status: "pending"
        });
    });

    document.querySelectorAll('.completed-tasks li').forEach(li => {
        const textSpan = li.querySelector('span'); 
        const dateSpan = li.querySelector('.task-date'); 
        tasks.push({
            text: textSpan.textContent.trim(),
            date: dateSpan ? dateSpan.textContent.trim() : '',
            status: "completed"
        });
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    const data = JSON.parse(localStorage.getItem('tasks')) || [];
    data.forEach(task => {
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.textContent = task.text;

        const dateSpan = document.createElement('span');
        dateSpan.className = "task-date";
        dateSpan.textContent = " " + (task.date || '');
        dateSpan.dataset.raw = task.date || '';
        dateSpan.style.color = getDateColor(task.date || '');

        if (task.status === "pending") {
            const terminé = createButton('Terminé', 'green', () => {
                moveToCompleted(li);
                saveTasks();
            });
            const supprimer = createButton('Supprimer', 'red', () => {
                li.remove();
                saveTasks();
            });
            const modifier = createButton('Modifier', 'yellow', () => editTask(span, modifier));

            li.append(span, dateSpan, terminé, supprimer, modifier);
            document.querySelector('.task-list').appendChild(li);
        } else {
            const enCours = createButton('En cours', 'orange', () => {
                moveToInProgress(li);
                saveTasks();
            });
            const supprimer = createButton('Supprimer', 'red', () => {
                li.remove();
                saveTasks();
            });

            li.append(span, dateSpan, enCours, supprimer);
            document.querySelector('.completed-tasks').appendChild(li);
        }
    });
}

window.addEventListener('DOMContentLoaded', loadTasks);