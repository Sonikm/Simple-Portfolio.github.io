let navToggle = document.getElementById('nav-toggle');
let navLinks = document.getElementById('nav-links');
let navHeader = document.getElementById('body-header');
let socialIconsName = document.getElementById('social_icons_name');

navToggle.addEventListener('click', ()=>{
    navHeader.classList.toggle('body-header');
    socialIconsName.classList.toggle('name-hide');
    navLinks.classList.toggle('nav-links')
})