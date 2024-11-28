class TaskManager {
    constructor() {
        this.tasks = Storage.getTasks();
        this.initializeUI();
    }

    initializeUI() {
        this.updateTaskCount();
        this.renderTasks();
    }

    addTask(title, description, priority) {
        const task = {
            id: Date.now(),
            title,
            description,
            priority,
            status: 'pending',
            createdAt: new Date()
        };

        this.tasks.push(task);
        Storage.saveTasks(this.tasks);
        this.renderTasks();
        this.updateTaskCount();
    }
    toggleTaskStatus(id) {
        const task = this.tasks.find(t => t.id === id);
        if (task) {
            task.status = task.status === 'pending' ? 'completed' : 'pending';
            Storage.saveTasks(this.tasks);
            this.renderTasks();
        }
    }

    deleteTask(id) {
        this.tasks = this.tasks.filter(t => t.id !== id);
        Storage.saveTasks(this.tasks);
        this.renderTasks();
        this.updateTaskCount();
    }

    renderTasks(filter = 'all') {
        const container = document.getElementById('taskContainer');
        container.innerHTML = '';

        let filteredTasks = this.tasks;
        if (filter !== 'all') {
            filteredTasks = this.tasks.filter(t => t.status === filter);
        }
        filteredTasks.forEach(task => {
            const taskElement = this.createTaskElement(task);
            container.appendChild(taskElement);
        });
    }

    createTaskElement(task) {
        const div = document.createElement('div');
        div.className = 'task-card ${task.status}';
        div.innerHTML = `
            <h3>${task.title}</h3>
            <p>${task.description}</p>
            <div class="task-meta">
                <span class="priority ${task.priority}">${task.priority}</span>
                <span class="status">${task.status}</span>
            </div>
            <div class="task-actions">
                <button onclick="taskManager.toggleTaskStatus(${task.id})">
                    ${task.status === 'pending' ? 'Complete' : 'Reopen'}
                </button>
                <button onclick="taskManager.deleteTask(${task.id})">Delete</button>
            </div>
        `;
        return div;
    }

    updateTaskCount() {
        document.getElementById('taskCount').textContent = this.tasks.length;
    }
}
