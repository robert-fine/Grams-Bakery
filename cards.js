function loadCards() {
  cardItems.forEach(cardItem => {
    cardsOutput.innerHTML += `
        <div id="${cardItem.id}" class="card" data-item='${cardItem.type}'>
          <i class="fas fa-cart-plus"></i>
          <div class="card-img-container">
            <img src="images/${cardItem.pic}" alt="" class="card-img" />
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
  });
  updateCards();
}

function updateCards() {
  storeCards = document.querySelectorAll(".card");
}

loadCards();

storeCards.forEach(card =>
  card.addEventListener("click", function addToCart() {
    const thisCard = cardItems.find(({ id }) => id === card.id);
    cartArr.push(thisCard);
    updateCart();

    // update cart price & item count
    totalPrice = 0;
    calcTotalPrice();
    updateCartNumber();
    cartDisplay.innerText = `${cartNumber} Item(s) - $${totalPrice}`;
    cartTotal.innerText = `Total $${totalPrice}`;

    // popup for "added to cart"

    // delete buttons in cart
    updateCartDeleteIcons();
  })
);
