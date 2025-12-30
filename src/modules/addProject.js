import folderImg from "/src/assets/folder-svgrepo-com.svg";
import addProjectFolderOption from "./addProjectFolderOption";
import deleteProject from "./deleteProject.js";

function addProject() {
    const container = document.getElementById('todo-content');
    const addNewProject = document.getElementById("addNewProjBtn");
    const overlay = document.getElementById('overlay');
    const projectGroup = document.querySelector('.project-group');

    addNewProject.addEventListener('click', () => {
        if (document.querySelector('.projectForm')) {
            const existingForm = document.querySelector('.projectForm');
            existingForm.remove(); 
        }

        const projectForm = document.createElement('div');
        projectForm.classList.add('projectForm');
        projectForm.innerHTML = `
            <div id="projectForm" class="projectForm-container hidden">
                <h3>Add Project</h3>
                <form id="projectPromptForm">
                    <label>Project Name:</label>
                    <input type="text" id="projectName" placeholder="Input Project Name" autocomplete="off">
                    <button type='submit' id='submitProjBtn'>Add Project</button>
                    <button type='button' id='cancelProjBtn'>Cancel</button>
                </form>
            </div>
        `;

        container.appendChild(projectForm);  
        const formContainer = projectForm.querySelector('#projectForm');
        const submitBtn = formContainer.querySelector('#submitProjBtn');
        const cancelBtn = formContainer.querySelector('#cancelProjBtn');
        const projectNameInput = formContainer.querySelector('#projectName');

        formContainer.classList.remove('hidden');
        formContainer.classList.add('active');
        overlay.classList.add('active');

        cancelBtn.addEventListener('click', () => {
            formContainer.classList.remove('active');
            overlay.classList.remove('active');
            setTimeout(() => {
                formContainer.classList.add('hidden');
                projectForm.remove(); 
            }, 300);
        });

        submitBtn.addEventListener('click', (e) => {
            e.preventDefault();

            const projectName = projectNameInput.value.trim();
            if (projectName) {
                const newProject = document.createElement('div');
                newProject.classList.add('nav-project');
                newProject.innerHTML = `
                    <img src="${folderImg}" alt="${projectName} Logo">
                    <p>${projectName}</p>
                    <button type="button" class="delete-project-btn">✖</button>
                `;

                projectGroup.appendChild(newProject);

                addProjectFolderOption(projectName);
                deleteProject(newProject);

                projectNameInput.value = '';
                formContainer.classList.remove('active');
                overlay.classList.remove('active');
                setTimeout(() => formContainer.classList.add('hidden'), 300);
            } else {
                alert('Please enter a valid project name');
            }
        });
    });
}

export default addProject;
