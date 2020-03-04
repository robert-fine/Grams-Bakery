let storeBtns = document.querySelectorAll('.store-btn');
const storeSearch = document.querySelector('.store-search');
let storeCardNames = document.querySelectorAll('.card-name');
let storeCards = document.querySelectorAll('.card');
const modalPopup = document.querySelector('.modal');

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

// modal image popup
storeCards.forEach(card =>
  card.addEventListener('click', function openModal(e) {
    e.preventDefault();
    modalPopup.style.display = 'flex';
    const modalClose = modalPopup.querySelector('.close');

    modalClose.addEventListener('click', closeModal);

    function closeModal(e) {
      e.preventDefault();
      modalPopup.style.display = 'none';
    }
    console.log(this);
  })
);
