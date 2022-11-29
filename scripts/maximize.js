let maximize = document.getElementById("maximize");
let maximizeProjects = document.getElementById("maximizeProjects");
let maximizeContact = document.getElementById("maximizeContact");
let myself = document.getElementById("windowMySelf");
let projects = document.getElementById("windowMyProjects");
let contact = document.getElementById("windowMyContact");


maximize.addEventListener('click', async (event) => {
    myself.classList.toggle("maximize");

    }
)

maximizeProjects.addEventListener('click', async (event) => {
    projects.classList.toggle("maximizeProjects");

    }
)

maximizeContact.addEventListener('click', async (event) => {
    contact.classList.toggle("maximizeContact");

    }
)
