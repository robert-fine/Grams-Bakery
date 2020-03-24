let storeBtns = document.querySelectorAll('.store-btn');
const storeSearch = document.querySelector('.store-search');
let storeCardNames = document.querySelectorAll('.card-name');
let storeCards = document.querySelectorAll('.card');
let cardsOutput = document.querySelector('.cards');
const modalPopup = document.querySelector('.modal');
const modalSection1 = document.querySelector('.modal-section1'); //modal image
const modalTitle = document.querySelector('.modal-title');
const modalItemDescription = document.querySelector('.modal-text');
const modalNavLeft = document.querySelector('.modal-left');
const modalNavRight = document.querySelector('.modal-right');

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

let cardList = [];
storeCards.forEach(card => cardList.push(card));
let count = 0;

// modal image popup
storeCards.forEach(card =>
  card.addEventListener('click', function setCount() {
    count = cardList.indexOf(this);
    openModal();
    updateModal();
  })
);

function openModal(e) {
  modalPopup.style.display = 'flex';

  const modalContainer = document.querySelector('.modal-container');
  setTimeout(() => (modalContainer.style.transform = 'scale(1)'), 001);

  const modalClose = modalPopup.querySelector('.close');

  // modalPopup.addEventListener('click', closeModal);
  modalClose.addEventListener('click', closeModal);

  function closeModal(e) {
    modalContainer.style.transform = 'scale(0)';
    setTimeout(() => (modalPopup.style.display = 'none'), 175);
  }

  modalNavLeft.addEventListener('click', () => {
    if (count === 0) {
      count = cardList.length - 1;
    } else {
      count--;
    }
    updateModal();
  });

  modalNavRight.addEventListener('click', () => {
    if (count === cardList.length - 1) {
      count = 0;
    } else {
      count++;
    }
    updateModal();
  });
}

function updateModal() {
  // get image from card and set to modal image
  const cardImg = cardList[count].children[1].children[0];
  modalSection1.innerHTML = `${cardImg.outerHTML}`;

  // get card name and set to modal h3 title
  const cardTitle =
    cardList[count].children[2].children[0].children[0].innerText;
  modalTitle.innerHTML = cardTitle;

  // get description from card and set to modal text
  const cardDescription =
    cardList[count].children[2].children[0].children[2].innerText;
  modalItemDescription.innerHTML = cardDescription;

  const addToCartBtn = document.querySelector('.add-to-cart-btn');

  addToCartBtn.addEventListener('click', () => {
    console.log(this);
  });
}
