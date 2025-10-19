function addProjectFolderOption(folderName) {
    const projectFolderSelect = document.getElementById('projectFolder');

    const newOption = document.createElement('option');
    newOption.value = folderName;
    newOption.textContent = folderName;

    projectFolderSelect.appendChild(newOption);
}

export default addProjectFolderOption;