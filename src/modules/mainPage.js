function mainPage() {
    const container = document.getElementById('todo-content');
    const classes = ['heading', 'addNewTask'];
    
    classes.forEach(cls => {
        const divClasses = document.createElement('div');
        divClasses.classList.add(cls);
        container.appendChild(divClasses);
    });

    const heading = document.querySelector('.heading');
    heading.innerHTML = "Today";
    document.querySelector('.task-group').addEventListener('click', (e) => {
        if (e.target && e.target.closest('.nav-task')) {
            const projectLabel = e.target.closest('.nav-task').querySelector('p').textContent;
            heading.innerHTML = projectLabel;
        }
    });

    document.querySelector('.project-group').addEventListener('click', (e) => {
        if (e.target && e.target.closest('.nav-project')) {
            const projectLabel = e.target.closest('.nav-project').querySelector('p').textContent;
            heading.innerHTML = projectLabel;
        }
    });

    const addNewNotes = document.querySelector('.addNewTask');
    addNewNotes.innerHTML = `
    <button type="button" id="addNewBtn">+ Add New Task</button>

    <div id='taskForm' class='form-container hidden'>
        <h3>Add Task</h3>
        <form id="taskPromptForm">
            <label>Task Name:</label>
            <input type='text' id="taskNameInput" placeholder='Input Task Name' autocomplete="off">
            <label>Description:</label>
            <input type='text' id="taskDescInput" placeholder='Input Description' autocomplete="off">
            <label>Due Date:</label>
            <input type='date' id="myDateInput">
            <label for="priority">Priority:</label>
            <select id="priority">
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>
            <label for="projectFolder">Project:</label>
            <select id="projectFolder">
                <option value="default">Default</option>
            </select>
            <button type='submit' id='submitTaskBtn'>Add Task</button>
            <button type='button' id='cancelTaskBtn'>Cancel</button>
        </form> 
    </div>
    `;

    const openBtn = document.getElementById('addNewBtn');
    const cancelBtn = document.getElementById('cancelTaskBtn');
    const formContainer = document.getElementById('taskForm');
    const overlay = document.getElementById('overlay');
    const taskNameInput = document.getElementById('taskNameInput');
    const taskDescInput = document.getElementById('taskDescInput');

    openBtn.addEventListener('click', () => {
        formContainer.classList.remove('hidden');
        formContainer.classList.add('active');
        overlay.classList.add('active')
        taskNameInput.value = '';
        taskDescInput.value = '';
    });

    cancelBtn.addEventListener('click', () => {
        formContainer.classList.remove('active');
        overlay.classList.remove('active');
        setTimeout(() => formContainer.classList.add('hidden'), 300);
    });
};

export default mainPage;