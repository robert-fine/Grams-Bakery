let storeBtns = document.querySelectorAll('.store-btn');
const storeSearch = document.querySelector('.store-search');
let storeCardNames = document.querySelectorAll('.card-name');
let cardsOutput = document.querySelector('.cards');
let storeCards;
const addedToCartNote = document.querySelector('.add-notification');

storeBtns.forEach(btn =>
  btn.addEventListener('click', function filterItems(e) {
    e.preventDefault();

    // change active button
    const currentSelected = document.querySelector('.selected');
    currentSelected.classList.remove('selected');
    this.classList.add('selected');

    // filter cards
    storeCards.forEach(card => {
      if (this.dataset.filter === 'all') {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
        if (card.dataset.item === this.dataset.filter) {
          card.classList.remove('hidden');
        }
      }
    });
  })
);

// search filter
storeSearch.addEventListener('keyup', () =>
  storeCards.forEach(card => {
    card.classList.add('hidden');
    if (
      card.innerHTML.toLowerCase().includes(storeSearch.value.toLowerCase())
    ) {
      card.classList.remove('hidden');
    }
  })
);
