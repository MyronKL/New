let btnLeft = document.getElementById("btn-left")
let btnRight = document.getElementById("btn-right")
let img = document.getElementById("img")
let intro1 = document.getElementById("intro1")
let intro2 = document.getElementById("intro2")
let title = document.getElementById("title")
let albert = document.getElementById("Albertine")

btnRight.onclick = () => {
    title.innerText = "Summary"
    img.classList.remove("right")
    img.classList.add("left")
    intro1.classList.remove("show")
    intro2.classList.add("show")
    btnRight.classList.add("hide-btn")
    btnLeft.classList.remove("hide-btn")
    albert.classList.remove("hide")
    albert.classList.add("show")
}

btnLeft.onclick = () => {
    title.innerText = "Introduction"
    img.classList.remove("left")
    img.classList.add("right")
    intro1.classList.add("show")
    intro2.classList.remove("show")
    btnRight.classList.remove("hide-btn")
    btnLeft.classList.add("hide-btn")
    albert.classList.remove("show")
    albert.classList.add("hide")
}