const hamMenuTag = document.querySelector(".hamMenuContainer")
const line1Tag = document.querySelector(".line1")
const line2Tag = document.querySelector(".line2")
const line3Tag = document.querySelector(".line3")
const overlayMenuTag = document.querySelector(".overlayMenu")
const listTag = document.querySelector(".list")

hamMenuTag.addEventListener("click",()=>{
    if(hamMenuTag.classList.contains("open")){
        line1Tag.classList.remove("rotateLine1")
        line2Tag.classList.remove("hideLine2")
        
        line3Tag.classList.remove("rotateLine3")
        overlayMenuTag.classList.remove("overlayTransform")
        listTag.classList.remove("moveListUp")
        hamMenuTag.classList.remove("open")

    }else{

    line1Tag.classList.add("rotateLine1")
    line2Tag.classList.add("hideLine2")
    
    line3Tag.classList.add("rotateLine3")
    overlayMenuTag.classList.add("overlayTransform")
    listTag.classList.add("moveListUp")
    hamMenuTag.classList.add("open")}
})