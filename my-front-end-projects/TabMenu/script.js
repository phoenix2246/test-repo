const tabMenuTag = document.querySelector(".tabMenu")
const sliderTag = document.querySelector(".slider")
const ulTag = document.querySelector("ul")

const tabs = ["home","services","contact","about us","login"]

const moveSlider = (x) =>{
  const clickedTab = x.target.id
  const clickedTabId = document.getElementById(clickedTab)
  const clickedLiTabWidth =clickedTabId.offsetWidth
  const clickedLiTabOffsetLeft = clickedTabId.offsetLeft
  console.log(clickedLiTabOffsetLeft)
  sliderTag.style.width = clickedLiTabWidth + "px"
  sliderTag.style.transform = `translateX(${clickedLiTabOffsetLeft}px)`
  
}
const show = () =>{
    console.log("HeeHee")
}
  
let i = 0
for( i = 0 ; i < tabs.length ; i++){
    const liTag = document.createElement("li")
    liTag.append(tabs[i].toUpperCase())
    liTag.id = i
    liTag.addEventListener("click",moveSlider)
    liTag.addEventListener("click",show)

    ulTag.append(liTag)
    if(i === 0){
    sliderTag.style.width = liTag.offsetWidth + "px"
}
}



