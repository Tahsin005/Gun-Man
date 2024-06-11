const shoot = document.querySelector(".shoot")

shoot.addEventListener("click", () => {
    const shElement = document.querySelector(".sh")
    shElement.classList.add("bullet")
    setTimeout(() => {
        const cocaColaElement = document.querySelector(".coca-cola")

        cocaColaElement.innerHTML = ""
        const breakColaImg = document.createElement("img")
        breakColaImg.src = "../assets/Glass Break.png"
        cocaColaElement.append(breakColaImg)
    }, 500)
})