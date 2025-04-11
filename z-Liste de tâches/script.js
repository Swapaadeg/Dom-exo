function addTask() {
    const input = document.getElementById("task-input");
       const taskText = input.value.trim()
    if (taskText !== "") {
        const li = document.createElement("li");
        li.textContent = taskText;
        const taskList = document.getElementById("task-list");
        taskList.appendChild(li);
        input.value = "";
    }
}
