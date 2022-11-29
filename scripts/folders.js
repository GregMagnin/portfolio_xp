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
    let windowMySelf = document.getElementById("windowMyProjects")
    windowMySelf.classList.add('open');
    let menu = document.getElementById("windowsmenu");
    menu.classList.remove('openMenu');
    menu.classList.add('closeMenu');
})

contact.addEventListener('click', async (event) => {
    let windowMySelf = document.getElementById("windowMyContact")
    windowMySelf.classList.add('open');
    let menu = document.getElementById("windowsmenu");
    menu.classList.remove('openMenu');
    menu.classList.add('closeMenu');
})