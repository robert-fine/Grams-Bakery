const cartBtn = document.querySelector(".cart");
const cart = document.querySelector("#cart");
const cartCloseBtn = document.querySelector(".close-icon");

cartBtn.addEventListener("click", toggleCart);

function toggleCart() {
  if (cart.classList.contains("hidden")) {
    cart.classList.remove("hidden");
    cart.classList.add("disp-flex");
    setTimeout(() => {
      cart.classList.remove("animate-out");
      cart.classList.add("animate-in");
    }, 10);
  } else {
    cart.classList.remove("animate-in");
    cart.classList.add("animate-out");
    setTimeout(() => {
      cart.classList.add("hidden");
      cart.classList.remove("disp-flex");
    }, 1000);
  }
}

cartCloseBtn.addEventListener("click", toggleCart);
