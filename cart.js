const cartBtn = document.querySelector('.cart');
const cart = document.querySelector('#cart');
const cartCloseBtn = document.querySelector('.close-icon');
let cartArr = [];
const cartItems = document.querySelector('.cart-items');
const cartClear = document.querySelector('.clear-cart');
let cartDeleteIcons = '';

cartBtn.addEventListener('click', toggleCart);

function toggleCart() {
  if (cart.classList.contains('hidden')) {
    cart.classList.remove('hidden');
    cart.classList.add('disp-flex');
    setTimeout(() => {
      cart.classList.remove('animate-out');
      cart.classList.add('animate-in');
    }, 10);
  } else {
    cart.classList.remove('animate-in');
    cart.classList.add('animate-out');
    setTimeout(() => {
      cart.classList.add('hidden');
      cart.classList.remove('disp-flex');
    }, 1000);
  }
}

cartCloseBtn.addEventListener('click', toggleCart);

function updateCart() {
  cartItems.innerHTML = '';
  cartArr.forEach(item => {
    cartItems.innerHTML += `
    <ul class="cart-item">
      <li class="item-pic">
        <img src="images/${item.pic}" alt="" />
      </li>
      <ul class="item-description">
        <li class="item-name">${item.name}</li>
        <li class="item-price">$${item.price}</li>
      </ul>
      <li class="delete-icon"><i class="fas fa-trash"></i></li>
  </ul>
    `;
  });
}

// function updateCartDeleteIcons() {
//   cartDeleteIcons = document.querySelectorAll('.delete-icon');
// }

// cartDeleteIcons.forEach(btn =>
//   btn.addEventListener('click', () => {
//     console.log('delete icon clicked');
//   })
// );
