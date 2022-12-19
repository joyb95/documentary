
// for header sticky
let headerMainWrap = document.querySelector('.headerMainWrap');
window.addEventListener('scroll', function(){
    headerMainWrap.classList.toggle('sticky', window.scrollY > 0);
})

// for menu icon toggle
let menuIcon = document.querySelector('.menuIcon');

let primaryMenuWrap = document.querySelector('.primaryMenuWrap');

menuIcon.onclick = function (){
    menuIcon.classList.toggle('active');
    primaryMenuWrap.classList.toggle('active');
}
