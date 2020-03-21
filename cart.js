const cartBtn = document.querySelector(".cart");
const cart = document.querySelector("#cart");

// function hideCartOnLoad() {
//   cart.style.transform = "translateY(-100%)";
//   cart.style.transition = "transform 2s";
// }

// hideCartOnLoad();

cartBtn.addEventListener("click", openCart);

function openCart() {
  // e.preventDefault();
  cart.classList.remove("hidden");
  cart.classList.add("disp-flex");
  setTimeout(() => {
    cart.classList.add("animate-in");
  }, 100);
}

// The above code does not work properly.  I want the menu to animate in as a dropdown from above.
// style.scss probably isn't set up properly.
