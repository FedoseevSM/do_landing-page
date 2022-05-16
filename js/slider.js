const swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 68,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
})

let item1 = document.querySelector(".hero__slider_item1")
let item2 = document.querySelector(".hero__slider_item2")
const item1_img = document.querySelector(".hero__slider_item1_img")
const item2_img = document.querySelector(".hero__slider_item2_img")

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
