const swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 68,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
})

const item1 = document.querySelector(".hero__slider_item1")
const item2 = document.querySelector(".hero__slider_item2")
const item1_img = document.querySelector(".hero__slider_item1_img")
const item2_img = document.querySelector(".hero__slider_item2_img")
const burger = document.querySelector(".burger")
const headerMenu = document.querySelector(".header__menu")
const main = document.querySelector(".main")
const footer = document.querySelector(".footer")

item1_img.addEventListener("click", function () {
  item2.classList.add("_active")
  item2.classList.remove("_disabled")
  item1.classList.add("_disabled")
})

item2_img.addEventListener("click", function () {
  item1.classList.add("_active")
  item1.classList.remove("_disabled")
  item2.classList.add("_disabled")
})

function activeHeader(isActive) {
  // Функия которая определяет если шапка активна и делает манипуляций в ней
  if (isActive) {
    main.classList.add("_white-bg")
    footer.classList.add("_white-bg")
    document.getElementById("burger").src = "./img/menu-2.png"
    headerMenu.classList.add("_active-burger")
  } else {
    main.classList.remove("_white-bg")
    footer.classList.remove("_white-bg")
    document.getElementById("burger").src = "./img/menu-1.png"
    headerMenu.classList.remove("_active-burger")
  }
}
activeHeader(burger.classList.contains("_active"))
burger.addEventListener("click", function () {
  burger.classList.toggle("_active")
  activeHeader(burger.classList.contains("_active"))
})
