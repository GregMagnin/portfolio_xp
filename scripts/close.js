let closing = document.getElementById("close");


export default closing.addEventListener('click', async (event) => {
    let windowPortfolio = document.querySelector(".window");

    windowPortfolio.classList.remove("open");
    windowPortfolio.classList.add("off");
})

