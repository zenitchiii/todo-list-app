function deleteProject(element) {
  const deleteBtn = element.querySelector(".delete-project-btn");
  if (!deleteBtn) return;

  deleteBtn.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();

    const projectName = element.querySelector("p")?.textContent || "this project";
    const confirmDelete = confirm(`Delete "${projectName}"?`);
    if (!confirmDelete) return;

    element.remove();
  });
}

export default deleteProject;
