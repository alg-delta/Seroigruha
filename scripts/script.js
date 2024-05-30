// start modalne wikno
var openModal = document.querySelectorAll(".banner-btn-explore");

var closeModal = document.querySelector(".close-modal");

var modalWrapper = document.querySelector(".modal-wrapper");

var modalBtn = document.querySelector(".modal-btn");

for (item of openModal) {
  item.addEventListener("click", function () {
    modalWrapper.style.display = "flex";
  });
}

closeModal.addEventListener("click", function () {
  modalWrapper.style.display = "none";
});

modalBtn.addEventListener("click", function () {
  modalWrapper.style.display = "none";
});

modalWrapper.addEventListener("click", function (event) {
  if (event.target === modalWrapper) {
    modalWrapper.style.display = "none";
  }
});

window.addEventListener("keydown", function (event) {
  if (event.code === "Escape") {
    modalWrapper.style.display = "none";
  }
});

// kinets modalne wikno

// start tab
let tabs = document.querySelectorAll(".tab");

let cards = document.querySelectorAll(".card");
for (tab of tabs) {
  tab.addEventListener("click", onClickTab);
}

function onClickTab(event) {
  for (tab of tabs) {
    tab.classList.remove("tabs-active");
  }
  let activeTab = event.target;
  activeTab.classList.add("tabs-active");

  let filter = activeTab.getAttribute("data-target");

  console.log(filter);

  for (card of cards) {
    let cardId = card.getAttribute("data-id");
    if (cardId === filter) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  }
}
// poka tabi 😭

for (card of cards) {
  let cardId = card.getAttribute("data-id");

  if (cardId === "west") {
    card.style.display = "block";
  } else {
    card.style.display = "none";
  }
}
var slides = document.querySelectorAll(".slide");
var dots = document.querySelectorAll(".dot");
var SliderNext = document.querySelector(".nextBtn");
var SliderBack = document.querySelector(".backBtn");

var activeSlide = 0;
showSlide(activeSlide);
function showSlide(n) {
  if (n > slides.length - 1) {
    activeSlide = 0;
  }
  if (n <0) {
    activeSlide = slides.length - 1;
  }
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].classList.remove("active");
  }
  slides[activeSlide].style.display = "flex";
  dots[activeSlide].classList.add("active");
}
SliderNext.addEventListener('click', function() {
 activeSlide  = activeSlide+1;
 showSlide(activeSlide);
})

SliderBack.addEventListener('click', function() {
	activeSlide  = activeSlide-1;
 showSlide(activeSlide);
})

for(let i=0; i<slides.lenght; i++) {
dots [i].addEventListener('click', function() {
	activeSlide = i;
	showSlide(activeSlide)
	
})
}