const btnChangeTheme =  document.querySelector("button.change_theme");

btnChangeTheme.addEventListener("click", () => {
    document.body.classList.toggle("light");
    document.body.classList.toggle("dark");
})