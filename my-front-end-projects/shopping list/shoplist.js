const inputProduct = document.getElementsByClassName("form-control")[0]
const odListTag = document.getElementsByClassName("od-list-container")[0]

// {/* <i class="fa-solid fa-trash-can"></i> */}







let productId = 1
const work = (x) => {

  const inputValue = x.target.value
  const productContainer = document.createElement("div")
  productContainer.classList.add("pdc")
    const parentDiv = document.createElement("div")
    parentDiv.classList.add("product-name")
////////change code below
const forIcon = document.createElement("div")
forIcon.classList.add("fa-solid","fa-trash-can","center")
forIcon.addEventListener("click",()=>{
    productContainer.remove()
})



////
    parentDiv.addEventListener("click",()=>{
      const classExist = parentDiv.classList.contains("purchase")
      if(classExist === true){
        parentDiv.classList.remove("purchase")
      }else{
      parentDiv.classList.add("purchase")
    }
  })
    
  const inputItem = document.createElement("span")
    const num = productId.toString()+"." +" " + inputValue +" "
  inputItem.append(num)
  

 
 inputItem.id = productId
 parentDiv.append(inputItem)
 productContainer.append(parentDiv,forIcon)
  odListTag.append(productContainer)
  inputProduct.value = ""
  productId++;
 
}
inputProduct.addEventListener("change",work)

