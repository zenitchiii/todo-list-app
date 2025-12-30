function deleteProject() {
    const deleteBtn = document.querySelector('.delete-project-btn');
    if (!deleteBtn) return;

    deleteBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();

        const projectName = document.querySelector('p')?.textContent || 'this project';
        const confirmDelete = confirm(`Delete "${projectName}"?`);
        if (!confirmDelete) return;

    }); 
}

export default deleteProject;