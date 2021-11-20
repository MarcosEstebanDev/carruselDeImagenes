//Grab DOM elements

const images = document.querySelector(".images")
const imageCollection = document.querySelectorAll(".image")
const prevBtn = document.querySelector(".prev")
const nextBtn = document.querySelector(".next")

prevBtn.addEventListener("click", prevSlide)
nextBtn.addEventListener("click", nextSlide)
//Utility vars

let index = 0

//Set interval
let interval = setInterval(startInterval, 2000)

function startInterval(){
    index++
    moveCarrusel()
}
function resetInterval(){
    clearInterval(interval)
    interval = setInterval(startInterval, 2000)
}
function moveCarrusel(){

    if(index > imageCollection.length -1){
        index = 0
    }else if (index < 0){
        index = imageCollection.length -1
    }

images.style.transform =`translateX(-${index * 800}px)`
}

//Nav buttons

function prevSlide(){
    index--
    resetInterval()
    moveCarrusel()
}
function nextSlide(){
    index++
    resetInterval()
    moveCarrusel()
}