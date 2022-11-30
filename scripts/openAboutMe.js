let notepadAboutMe = document.getElementById("notepadAbout");

notepadAboutMe.addEventListener('dblclick',(event) => {
    let notepadFile = document.getElementById("notepadAboutMe");
    notepadFile.classList.remove("off");
    notepadFile.classList.add('open');
})