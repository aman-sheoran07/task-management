const taskManager = new TaskManager();

document.getElementById('addTaskForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('taskTitle').value;
    const description = document.getElementById('taskDescription').value;
    const priority = document.getElementById('taskPriority').value;

    taskManager.addTask(title, description, priority);
    e.target.reset();
});

document.querySelector('.task-filters').addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        document.querySelectorAll('.task-filters button').forEach(btn => 
            btn.classList.remove('active'));
        e.target.classList.add('active');
        taskManager.renderTasks(e.target.dataset.filter);
    }
});