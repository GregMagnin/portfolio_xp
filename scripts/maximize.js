let maximize = document.getElementById("maximize");
let maximizeProjects = document.getElementById("maximizeProjects");
let maximizeContact = document.getElementById("maximizeContact");
let maximizeNotepad = document.getElementById("maximizeNotepadDesktop");
let maximizeAboutMe = document.getElementById("maximizeNotepadAboutMe");
let myself = document.getElementById("windowMySelf");
let projects = document.getElementById("windowMyProjects");
let contact = document.getElementById("windowMyContact");
let notepad = document.getElementById("notepadDesktop");
let aboutMe = document.getElementById("notepadAboutMe");


maximize.addEventListener('click', async (event) => {
    myself.classList.remove("off");
    myself.classList.toggle("maximize");

    }
)

maximizeProjects.addEventListener('click', async (event) => {
    myself.classList.remove("off");
    projects.classList.toggle("maximizeProjects");

    }
)

maximizeContact.addEventListener('click', async (event) => {
    myself.classList.remove("off");
    contact.classList.toggle("maximizeContact");
}
)

maximizeNotepad.addEventListener('click', async (event) => {
    myself.classList.remove("off");
    notepad.classList.toggle("maximizeNotepadDesktop");

    }
)

maximizeAboutMe.addEventListener('click', async (event) => {
    myself.classList.remove("off");
    aboutMe.classList.toggle("maximizeNotepadAboutMe");
    aboutMe.style.position = 'absolute';
    aboutMe.style.top = '0';
    aboutMe.style.left = '0';
    }
)
