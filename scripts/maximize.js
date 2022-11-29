let maximize = document.getElementById("maximize");

export default maximize.addEventListener('click', async (event) => {
    let windowPortfolio = document.querySelector(".window");
    windowPortfolio.classList.replace("open", "maximize");
})