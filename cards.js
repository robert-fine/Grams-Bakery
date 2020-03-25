function loadCards() {
  cardItems.forEach(cardItem => {
    if (cardItem.display == true) {
      cardsOutput.innerHTML += `
        <div class="card" data-item='${cardItem.type}'>
          <i class="fas fa-cart-plus"></i>
          <div class="card-img-container">
            <img src="/images/${cardItem.pic}" alt="" class="card-img" />
          </div>
          <div class="card-description">
            <ul class="flex-row">
              <li class="card-name">${cardItem.name}</li>
              <li class="price">$${cardItem.price}</li>
              <l1 class="item-description">${cardItem.description}</l1>
              <li>
                <i class="fas fa-cart-plus"></i>
              </li>
            </ul>
          </div>
        </div>
      `;
    }
  });
  updateCards();
}

function updateCards() {
  storeCards = document.querySelectorAll('.card');
  storeCards.forEach(card => card.addEventListener('click', addToCart));
}

loadCards();
