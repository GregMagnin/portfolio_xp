let closing = document.getElementById("close");
let closingProjects = document.getElementById("closeProjects");
let closingContact = document.getElementById("closeContact");


closing.addEventListener('click', async (event) => {
    let windowPortfolio = document.querySelector(".window");
    windowPortfolio.classList.remove("maximize");
    windowPortfolio.classList.remove("open");
    windowPortfolio.classList.add("off");
})

closingProjects.addEventListener('click', async (event) => {
    let projects = document.getElementById("windowMyProjects");
    projects.classList.remove("maximizeProjects");
    projects.classList.remove("open");
    projects.classList.add("off");
})

closingContact.addEventListener('click', async (event) => {
    let contact = document.getElementById("windowMyContact");
    contact.classList.remove("maximizeContact");
    contact.classList.remove("open");
    contact.classList.add("off");
})


