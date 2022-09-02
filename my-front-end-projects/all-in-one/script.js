const btn = document.getElementsByClassName ('btn')[0]
const menuItem = document.getElementsByClassName('menuItem')

btn.addEventListener('click',()=>{
    for(let i=0;i<menuItem.length;i++){
        menuItem[i].classList.toggle('show')
    }
})