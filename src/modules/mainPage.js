function mainPage() {
    const container = document.getElementById('todo-content');
    const navTask = document.querySelectorAll('.nav-task')
    const navProject = document.querySelectorAll('.nav-project')
    const classes = ['heading', 'addNewTask', 'cards'];
    
    classes.forEach(cls => {
        const divClasses = document.createElement('div');
        divClasses.classList.add(cls);
        container.appendChild(divClasses);
    });

    const heading = document.querySelector('.heading');
    heading.innerHTML = "Today";
    navTask.forEach(task => {
        task.addEventListener('click', () => {
            const taskLabel = task.querySelector('p').textContent;
            heading.innerHTML = '';
            if (heading) heading.innerHTML = `${taskLabel}`
        });
    });

    navProject.forEach(project => {
        project.addEventListener('click', () => {
            const projectLabel = project.querySelector('p').textContent;
            heading.innerHTML = '';
            if (heading) heading.innerHTML = `${projectLabel}`;
        });
    });

    const addNewNotes = document.querySelector('.addNewTask');
    addNewNotes.innerHTML = `
    <button type="button" id="addNewBtn">Add New Task</button>

    <div id='taskForm' class='form-container hidden'>
        <h3>Add Task</h3>
        <form id="taskPromptForm">
            <label>Task Name:</label>
            <input type='text' placeholder='Input Task Name' autocomplete="off">
            <label>Description:</label>
            <input type='text' placeholder='Input Description' autocomplete="off">
            <label>Due Date:</label>
            <input type='date' autocomplete="off" id="myDateInput">
            <label for="priority">Priority:</label>
            <select id="priority">
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>
            <br>
            <button type='submit' id='submitTaskBtn'>Add Task</button>
            <button type='button' id='cancelTaskBtn'>Cancel</button>
        </form> 
    </div>
    `;

    const openBtn = document.getElementById('addNewBtn');
    const cancelBtn = document.getElementById('cancelTaskBtn')
    const formContainer = document.getElementById('taskForm')

    openBtn.addEventListener('click', () => {
        formContainer.classList.remove('hidden');
        formContainer.classList.add('active');
    });

    cancelBtn.addEventListener('click', () => {
        formContainer.classList.remove('active');
        setTimeout(() => formContainer.classList.add('hidden'), 300);
    });
};

export default mainPage;