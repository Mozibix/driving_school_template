const toogleBtn = document.querySelector('.toogle_btn');
const toogleBtnIcon = document.querySelector('.toogle_btn i');
const menu = document.querySelector('.dropdown_menu');
const menuListsContainer = document.querySelectorAll('.menu_lists');
const menuLists = document.querySelectorAll('.menu_lists li');
const navScroll = document.querySelector('.navbar');

/* SLIDES */
const slides = document.querySelectorAll('.slides');
const dots = document.querySelectorAll('.dot');

/* HERO-BTN */
const autoManualBtn = document.querySelectorAll('.auto_manual_btn');

/* POP-UP VARIABLE*/
const popUpSec = document.querySelector('#pop');
const popUpSec1 = document.querySelector('.pop_up_box1');
const popUpSec2 = document.querySelector('.pop_up_box2');
const popUpSec3 = document.querySelector('.pop_up_box3');
const popUpSec4 = document.querySelector('.pop_up_box4');
const popUpSec5 = document.querySelector('.pop_up_box5');

/* POP-UP FUNCTIONS */

const toggleFadeClass1 = () => {
  popUpSec1.classList.toggle('fade');
  popUpSec2.classList.remove('fade');
  popUpSec3.classList.remove('fade');
  popUpSec4.classList.remove('fade');
  popUpSec5.classList.remove('fade');
};
const toggleFadeClass2 = () => {
  popUpSec2.classList.toggle('fade');
  popUpSec1.classList.remove('fade');
  popUpSec3.classList.remove('fade');
  popUpSec4.classList.remove('fade');
  popUpSec5.classList.remove('fade');
};
const toggleFadeClass3 = () => {
  popUpSec3.classList.toggle('fade');
  popUpSec1.classList.remove('fade');
  popUpSec2.classList.remove('fade');
  popUpSec4.classList.remove('fade');
  popUpSec5.classList.remove('fade');
};
const toggleFadeClass4 = () => {
  popUpSec4.classList.toggle('fade');
  popUpSec1.classList.remove('fade');
  popUpSec2.classList.remove('fade');
  popUpSec3.classList.remove('fade');
  popUpSec5.classList.remove('fade');
};
const toggleFadeClass5 = () => {
  popUpSec5.classList.toggle('fade');
  popUpSec1.classList.remove('fade');
  popUpSec2.classList.remove('fade');
  popUpSec3.classList.remove('fade');
  popUpSec4.classList.remove('fade');
};
popUpSec.style.display = 'block';
setTimeout(() => {
  popUpSec.style.display = 'none';
}, 100000);

setInterval(toggleFadeClass1, 10000);
setInterval(toggleFadeClass2, 20000);
setInterval(toggleFadeClass3, 40000);
setInterval(toggleFadeClass4, 80000);
setInterval(toggleFadeClass5, 90000);

/*   <script>
    // Function to add or remove the active class
    function toggleActiveClass() {
      var element = document.getElementById("myElement");
      element.classList.toggle("active");
    }

    // Add or remove the active class every 3 seconds
    setInterval(toggleActiveClass, 3000);
  </script> */

/* SCROLL-FUNCTIONS */
window.addEventListener('scroll', () => {
  navScroll.classList.toggle('scroll_active', window.scrollY > 350);
});

menuListsContainer.forEach(container => {
  window.addEventListener('scroll', () => {
    container.classList.toggle('text_primary', window.scrollY > 350);
  });
});

/* ACTIVE LINKS */
const removeActive = () => {
  menuLists.forEach(link => {
    link.classList.remove('active');
  });
};

menuLists.forEach(link => {
  link.addEventListener('click', () => {
    removeActive();
    link.classList.add('active');
  });
});

const removeActiveBtn = () => {
  autoManualBtn.forEach(btn => {
    btn.classList.remove('active');
  });
};

autoManualBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    removeActiveBtn();
    btn.classList.add('active');
  });
});

/* NAV-FUNCTIONS */
toogleBtn.onclick = () => {
  menu.classList.toggle('open');

  const isOpen = menu.classList.contains('open');

  toogleBtnIcon.classList = isOpen ? 'fa fa-times' : 'fa fa-bars';
};

const isClose = () => {
  const isClose = menu.classList.remove('open');

  toogleBtnIcon.classList = isClose ? 'fa fa-times' : 'fa fa-bars';
};

document.onclick = e => {
  if (!toogleBtn.contains(e.target) && !menu.contains(e.target)) {
    isClose();
  }
};
document.onscroll = e => {
  if (!toogleBtn.contains(e.target) && !menu.contains(e.target)) {
    isClose();
  }
};

/* SLIDES FUNCTIONS */
let slideIndex = 1;
showSlides(slideIndex);

const plusSlides = n => {
  showSlides((slideIndex += n));
};

const currentSlide = n => {
  showSlides((slideIndex = n));
};

function showSlides(n) {
  let i;
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace('active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
}
