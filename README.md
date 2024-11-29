# Task Management System

A clean, modern web application for managing tasks and to-dos. Built with HTML, CSS, and JavaScript, this application provides an intuitive interface for creating, tracking, and managing tasks with different priority levels.

## 🌟 Features

- Create and manage tasks with titles and descriptions
- Set priority levels (Low, Medium, High)
- Mark tasks as complete/pending
- Delete tasks
- Filter tasks by status (All, Pending, Completed)
- Local storage persistence
- Responsive design
- Clean and modern UI

## 🚀 Live Demo

The project is hosted on GitHub Pages at: [Your GitHub Pages URL]

## 📁 Project Structure

```
task-management/
├── index.html
├── css/
│   ├── style.css
│   └── responsive.css
├── js/
│   ├── app.js
│   ├── taskManager.js
│   └── storage.js
└── README.md
```

## 🛠️ Installation & Setup

1. Clone the repository:
```bash
git clone https://github.com/yourusername/task-management.git
```

2. Navigate to the project directory:
```bash
cd task-management
```

3. Open the project:
   - Using VS Code with Live Server:
     - Install Live Server extension
     - Right-click `index.html`
     - Select "Open with Live Server"
   
   - Using Python's built-in server:
```bash
# Python 3.x
python -m http.server 3000

# Python 2.x
python -m SimpleHTTPServer 3000
```

4. Visit `http://localhost:3000` in your browser

## 💻 Usage

1. **Adding a Task**
   - Enter task title
   - Add task description
   - Select priority level
   - Click "Add Task"

2. **Managing Tasks**
   - Click "Complete" to mark a task as done
   - Click "Delete" to remove a task
   - Use filters to view All/Pending/Completed tasks

3. **Data Persistence**
   - Tasks are automatically saved to local storage
   - Data persists between browser sessions

## 🤝 Contributing

To contribute to this project:

1. Fork the repository
2. Create a feature branch:
```bash
git checkout -b feature/YourFeature
```

3. Commit your changes:
```bash
git commit -m 'Add some feature'
```

4. Push to the branch:
```bash
git push origin feature/YourFeature
```

5. Create a Pull Request



### Component Breakdown
- **Storage.js**: Handles local storage operations
- **TaskManager.js**: Core task management logic
- **app.js**: Application initialization and event handling

## 🎨 Customization

### Changing Colors
Edit the CSS variables in `style.css`:
```css
:root {
    --primary-color: #4285f4;
    --danger-color: #ff4444;
    --success-color: #00C851;
    --warning-color: #ffbb33;
    --text-color: #333;
    --bg-color: #f8f9fa;
}
```

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones

## 🔍 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team Members

- Aman Sheoran: Frontend Structure
- Milan Singh: Styling and UI/UX
- Mayank Garg: JavaScript Functionality

## 🙏 Acknowledgments

- Icons and color schemes inspired by Material Design
- Modern CSS techniques for responsive design
- Local Storage API for data persistence

## 📱 Contact

For any queries or suggestions, please open an issue in the GitHub repository.
