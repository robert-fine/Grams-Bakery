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

    const modalContainer = document.querySelector('.modal-container');
    setTimeout(() => (modalContainer.style.transform = 'scale(1)'), 001);

    const modalClose = modalPopup.querySelector('.close');

    // modalPopup.addEventListener('click', closeModal);
    modalClose.addEventListener('click', closeModal);

    function closeModal(e) {
      // e.stopPropagation();
      modalContainer.style.transform = 'scale(0)';
      setTimeout(() => (modalPopup.style.display = 'none'), 175);
    }
  })
);
