// storeCards.forEach(card => cardList.push(card));

function loadCards() {
  cardItems.forEach(cardItem => {
    if (cardItem.display == true) {
      console.log(cardItem.name);
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

  // storeCards.forEach(card => {
  //   cardList.push(card);
  //   console.log(cardList);
  // });

  // storeCards.forEach(card => card.addEventListener('click', setCount));
}

loadCards();
setTimeout(
  () =>
    storeCards.forEach(card =>
      card.addEventListener('click', () => {
        console.log('clicked');
      })
    ),
  500
);

// function setCount() {
//   // count = cardList.indexOf(this);
//   console.log(this);
// }
