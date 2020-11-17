console.log('обрабатываем клик по меню')

let hide = document.querySelector('.desktop-header__tour--tours_day');
let hide2 = document.querySelector('.desktop-header__tour--tours_package');
let inner = document.querySelector('.header-text__teriberka-inner');

hide.addEventListener('click', function() {
 
    console.log('клик по топ 10 туров')
    console.dir(hide)
    inner.classList.add('header-text__teriberka-inner--hide');
  
    // inner.style.visibility = "visible";
    // console.log('второй клик')
  
})

hide2.addEventListener('click', function() {
  console.log('клик по топ 10 туров')
  inner.classList.add('header-text__teriberka-inner--hide');
})