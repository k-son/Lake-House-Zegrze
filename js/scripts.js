///// HAMBURGER MENU

const hamburgerIcon = document.getElementById('hamburgerIcon');
const modalMenu = document.getElementById('modalMenu');
const closeIcon = document.getElementById('closeIcon'); 
const modalMenuLinks = document.querySelectorAll('.hamburger__link');

hamburgerIcon.addEventListener('click', () => {
  hamburgerIcon.style.visibility = 'hidden';
  modalMenu.style.transition = 'all .2s';
  modalMenu.style.marginLeft = 0;
})

function closeModalMenu() {
  modalMenu.style.marginLeft = '-50rem';
  hamburgerIcon.style.visibility = 'visible';
}

closeIcon.addEventListener('click', closeModalMenu);

function modalMenuLinksAction() {
let i = 0;
while (i < modalMenuLinks.length) {
  modalMenuLinks[i].addEventListener('click', closeModalMenu);
  i++;
}}
modalMenuLinksAction();



///// APARTMENTS SCHEMES

const schemes = document.querySelectorAll('.apartments__content__plan__scheme');
const variantButtons = document.querySelectorAll('.variantBtn');

function removeShowScheme() {
  for (i = 0; i < schemes.length; i++) {
    schemes[i].classList.remove('showScheme');
  }
}  

function removeVariantSelected() {
  for (i = 0; i < schemes.length; i++) {
    variantButtons[i].classList.remove('variantSelected');
  }
} 

for (let i = 0; i < variantButtons.length; i++) {
  variantButtons[i].addEventListener('click', () => {
    removeShowScheme();
    schemes[i].classList.add('showScheme');
    removeVariantSelected();
    variantButtons[i].classList.add('variantSelected');
    if (window.matchMedia("(max-width: 1100px)").matches) {
    window.location = '#' + 'plans';
    }
  });

  variantButtons[i].addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
    removeShowScheme();
    schemes[i].classList.add('showScheme');
    removeVariantSelected();
    variantButtons[i].classList.add('variantSelected');
    if (window.matchMedia("(max-width: 1100px)").matches) {
    window.location = '#' + 'plans';
    }
  }});
}


///// ANCHOR FUNCTIONS FOR BUTTONS

document.getElementById('niesamowitaOkolica').addEventListener('click', () => {
  window.location = '#lokalizacja';
})

document.getElementById('poznajInwestycje').addEventListener('click', () => {
  window.location = '#inwestycja';
})

document.getElementById('przyjrzyjSie').addEventListener('click', () => {
  window.location = '#galeria';
})

document.getElementById('przyjrzyjSie2').addEventListener('click', () => {
  window.location = '#galeria';
})

document.getElementById('wybierzMieszkanie').addEventListener('click', () => {
  window.location = '#mieszkania';
})

document.getElementById('rezerwujApartament').addEventListener('click', () => {
  window.location = '#kontakt';
})



///// SCROLL TO TOP BUTTON

const upBtn = document.getElementById('upBtn');

function showUpBtn() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    upBtn.style.display = "block";
  } else {
    upBtn.style.display = "none";
  }
}

window.addEventListener('scroll', () => {
  showUpBtn();
})

upBtn.addEventListener('click', () => {
  document.body.scrollTop = 0;  // For Sarafi
  document.documentElement.scrollTop = 0; // Chrome, Firefox, IE, Opera
  closeModalMenu();
})


///// SLIDE IN CONTENT

const anchorLocalizacja = document.getElementById('lokalizacja');

function scrollToLokalizacja() {
  if (document.body.scrollTop > anchorLocalizacja.offsetTop || document.documentElement.scrollTop > anchorLocalizacja.offsetTop) {
    document.querySelector('.localization__content__icons').style.marginLeft = 0;
  }
}

window.addEventListener('scroll', () => {
  scrollToLokalizacja();
})