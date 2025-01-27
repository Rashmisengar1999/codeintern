const toggelbutton = document.querySelector(".toggelbutton")
const container = document.querySelector(".container")

toggelbutton.addEventListener("click", (e) => {
    e.preventDefault()
    if (toggelbutton.innerText === "Light"){
        container.style.backgroundColor = "black"
        toggelbutton.innerText = "Dark"
    }else {
        container.style.backgroundColor = "white"
        toggelbutton.innerText = "Light"
    }


})