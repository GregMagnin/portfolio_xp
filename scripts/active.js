let notepad = document.getElementById("notepadAbout")

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