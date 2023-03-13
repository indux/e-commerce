const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const burgerMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const ShoppingCartIcon = document.querySelector(".navbar-shopping-cart");
const asideProduct = document.querySelector(".product-detail");

menuEmail.addEventListener("click", toggleDesktopMenu);
burgerMenu.addEventListener("click", toggleMobileMenu);
ShoppingCartIcon.addEventListener("click", toggleCarritoAside);

function toggleDesktopMenu() {
  const isAsideMenuClosed = asideProduct.classList.contains("inactive");

  desktopMenu.classList.toggle("inactive");

  if (!isAsideMenuClosed) {
    asideProduct.classList.add("inactive");
  }
}

function toggleMobileMenu() {
  const isAsideMenuClosed = asideProduct.classList.contains("inactive");

  mobileMenu.classList.toggle("inactive");

  if (!isAsideMenuClosed) {
    asideProduct.classList.add("inactive");
  }
}

function toggleCarritoAside() {
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
  const isToogleDesktopClosed = desktopMenu.classList.contains("inactive");

  asideProduct.classList.toggle("inactive");

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add("inactive");
  }

  if (!isToogleDesktopClosed) {
    desktopMenu.classList.add("inactive");
  }
}
