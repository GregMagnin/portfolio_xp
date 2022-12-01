let notepad = document.getElementById("notepadAbout");
let notepadLinks = document.getElementById("notepadLinks");
let desktopMyself = document.getElementById("desktopMyself");

notepad.addEventListener('click', (event) => {
    let nameAbout = document.getElementById("nameAbout");
    let notepadImg = document.getElementById("notepadAboutImg");
    notepadImg.style.backgroundColor = "#81b7fd";
    nameAbout.style.backgroundColor = "#0b5ffb";
    nameAbout.style.color = "white";
})

notepad.addEventListener('dblclick', (event) => {
    let nameAbout = document.getElementById("nameAbout");
    let notepadImg = document.getElementById("notepadAboutImg");
    notepadImg.style.backgroundColor = "white";
    nameAbout.style.backgroundColor = "white";
    nameAbout.style.color = "black";
})

notepadLinks.addEventListener('click', (event) => {
    let links = document.getElementById("links");
    let notepadLinks = document.getElementById("notepadLinksImg");
    notepadLinks.style.backgroundColor = "#81b7fd";
    links.style.backgroundColor = "#0b5ffb";
    links.style.color = "white";
})

notepadLinks.addEventListener('dblclick', (event) => {
    let links = document.getElementById("links");
    let notepadLinks = document.getElementById("notepadLinksImg");
    notepadLinks.style.backgroundColor = "white";
    links.style.backgroundColor = "white";
    links.style.color = "black";
})

desktopMyself.addEventListener('click', (event) => {
    let myselfImg = document.getElementById("myselfImg");
    let myselfText = document.getElementById("myselfText");
    myselfImg.style.backgroundColor = "#81b7fd";
    myselfText.style.backgroundColor = "#0b5ffb";
    myselfText.style.color = "white";
})

desktopMyself.addEventListener('dblclick', (event) => {
    let myselfImg = document.getElementById("myselfImg");
    let myselfText = document.getElementById("myselfText");
    myselfImg.style.backgroundColor = "white";
    myselfText.style.backgroundColor = "white";
    myselfText.style.color = "black";
})