const cards = document.querySelectorAll('.card')
cards.forEach(card =>{
    card.addEventListener('click', () =>{
        cardremove()
        card.classList.add('active')
    })
})
function cardremove(){
    cards.forEach(card =>{
        card.classList.remove('active')
    })
}