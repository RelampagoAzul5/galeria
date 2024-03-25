const menuItens = document.querySelectorAll('.albunsItem')

function removeSelect(){
    const selectedItem = document.querySelector('.selected')
    selectedItem.classList.remove('selected')
}
menuItens.forEach(item => {item.addEventListener('click',() =>{
    removeSelect()
    item.classList.add('selected')
})
})