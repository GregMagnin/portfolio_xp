let myself = document.getElementById("mySelf");
let projects = document.getElementById("myProjects");
let contact = document.getElementById("myContact");



     myself.addEventListener('click', async (event) => {
    let windowMySelf = document.getElementById("windowMySelf")
    windowMySelf.classList.add('open');
    let menu = document.getElementById("windowsmenu");
    menu.classList.remove('openMenu');
    menu.classList.add('closeMenu');
})

projects.addEventListener('click', async (event) => {
    let windowProjects = document.getElementById("windowMyProjects")
    windowProjects.classList.add('open');
    let menu = document.getElementById("windowsmenu");
    menu.classList.remove('openMenu');
    menu.classList.add('closeMenu');
})

contact.addEventListener('click', async (event) => {
    let windowContact = document.getElementById("windowMyContact")
    windowContact.classList.add('open');
    let menu = document.getElementById("windowsmenu");
    menu.classList.remove('openMenu');
    menu.classList.add('closeMenu');
})

