///// HAMBURGER MENU

const hamburgerIcon = document.getElementById('hamburgerIcon');
const modalMenu = document.getElementById('modalMenu');
const closeIcon = document.getElementById('closeIcon'); 
const modalMenuLinks = document.querySelectorAll('.hamburger__link');

hamburgerIcon.addEventListener('click', () => {
  hamburgerIcon.style.visibility = 'hidden';
  modalMenu.style.display = 'block';
})

function closeModalMenu() {
  modalMenu.style.display = 'none';
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



