function mainPage() {
    const container = document.getElementById('todo-content');
    const classes = ['date-heading', 'cards'];
    
    classes.forEach(cls => {
        const divClasses = document.createElement('div');
        divClasses.classList.add(cls);
        container.appendChild(divClasses);
    });

    const dateHeading = document.querySelector('.date-heading');
    const card = document.querySelector('.cards');

    if (dateHeading) dateHeading.innerHTML = `
    `

};

export default mainPage;