console.log('обрабатываем клик по меню')

let hide = document.querySelector('.desktop-header__tour--tours_day');
let hide2 = document.querySelector('.desktop-header__tour--tours_package');
// let inner = document.querySelector('.header-text__teriberka-inner');
let text = document.querySelector('.header__text-items');
let text2 = document.querySelector('.header-text__wrap');


hide.addEventListener('click', function() {
 
    console.log('клик по топ 10 туров')
    console.dir(hide)
    // inner.classList.add('header-text__teriberka-inner--hide');
  
})

hide2.addEventListener('click', function() {
  console.log('клик по топ 10 туров')
  // inner.classList.add('header-text__teriberka-inner--hide');
})