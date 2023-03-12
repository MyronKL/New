let btnLeft = document.getElementById("btn-left")
let btnRight = document.getElementById("btn-right")
let img = document.getElementById("img")
let intro1 = document.getElementById("intro1")
let intro2 = document.getElementById("intro2")
let title = document.getElementById("title")
let albert = document.getElementById("navbar")

btnRight.onclick = () => {
    title.innerText = "Marriage To Albert"
    img.classList.remove("right")
    img.classList.add("left")
    intro1.classList.remove("show")
    intro2.classList.add("show")
    // btnRight.classList.add("hide-btn")
    btnLeft.classList.remove("hide-btn")
}

btnLeft.onclick = () => {
    title.innerText = "The Albertine Monarchy"
    img.classList.remove("left")
    img.classList.add("right")
    intro1.classList.add("show")
    intro2.classList.remove("show")
    btnRight.classList.remove("hide-btn")
    btnLeft.classList.add("hide-btn")
}
btnRight.onclick = () => {
    title.innerText = "Marriage To Albert"
    img.classList.remove("right")
    img.classList.add("left")
    intro1.classList.remove("show")
    intro2.classList.add("show")
    // btnRight.classList.add("hide-btn")
    btnLeft.classList.remove("hide-btn")
}
