// accordion
$( function() {
$( "#accordion" ).accordion();
} );

// pagination
$(function() {
    $('#light-pagination').pagination({
        items: 1584,
        itemsOnPage: 16,
        cssStyle: 'light-theme',
        edges: 1,
        prevText: ' ',
        nextText: ' ',
        });
    });



// adding a new card
const cardContainer = document.querySelector('.cards')
const addBtn = document.querySelector('.new-card__btn')
addBtn.addEventListener('click', function() {
    let btnLoader = addBtn.firstChild
    btnLoader.classList.add('loader-animated')
    setTimeout(() => {
        let newCard = document.createElement('article')
        newCard.classList.add('cards__card')
        let cardImg = document.createElement('img')
        cardImg.src = 'img/jpeg/noimg.jpg'
        newCard.append(cardImg)
        cardContainer.append(newCard)
        btnLoader.classList.remove('loader-animated')

    }, 2000);
})
// deleting cards
const crossBtnArr = document.querySelectorAll('.card__cross')
crossBtnArr.forEach(elem=> elem.addEventListener('click', function() {
    elem.classList.add('animated')
    setTimeout(() => {
        elem.parentElement.remove()
    }, 3000);
}))

// select
