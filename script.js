// Get DOM elements
const taskInput = document.getElementById('taskInput');
const taskDate = document.getElementById('taskDate');
const addTaskBtn = document.getElementById('addTaskBtn');
const tasksList = document.getElementById('tasksList');

// Event listener to add task
addTaskBtn.addEventListener('click', addTask);

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();
    const taskDueDate = taskDate.value;

    if (taskText !== "") {
        const task = document.createElement('div');
        task.classList.add('task');

        // Create the task text and append to the task div
        const taskContent = document.createElement('span');
        taskContent.textContent = `${taskText} (Due: ${taskDueDate ? taskDueDate : 'No Date'})`;
        task.appendChild(taskContent);

        // Create a button to mark as completed
        const completeBtn = document.createElement('button');
        completeBtn.textContent = "✔️";
        completeBtn.addEventListener('click', () => markCompleted(task));
        task.appendChild(completeBtn);

        // Create a button to edit the task
        const editBtn = document.createElement('button');
        editBtn.textContent = "✏️";
        editBtn.addEventListener('click', () => editTask(task, taskContent));
        task.appendChild(editBtn);

        // Create a button to delete the task
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = "❌";
        deleteBtn.addEventListener('click', () => deleteTask(task));
        task.appendChild(deleteBtn);

        tasksList.appendChild(task);

        // Clear inputs after adding the task
        taskInput.value = '';
        taskDate.value = '';
    }
}

// Function to mark task as completed
function markCompleted(task) {
    task.classList.toggle('completed');
}

// Function to delete a task
function deleteTask(task) {
    tasksList.removeChild(task);
}

// Function to edit a task
function editTask(task, taskContent) {
    const newText = prompt("Edit your task:", taskContent.textContent);
    if (newText !== null && newText.trim() !== "") {
        taskContent.textContent = `${newText} (Due: ${taskDate.value ? taskDate.value : 'No Date'})`;
    }
}
