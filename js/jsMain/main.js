const arrCities = ['Москва', 'Санкт-Петербург', 'Новосибирск', 'Екатеринбург', 'Казань', 'Нижний Новгород', 'Челябянск', 'Самара', 'Омск', 'Ростов-на-Дону', 'Уфа', 'Красноярск', 'Воронеж', 'Пермь', 'Волгоград', 'Краснодар', 'Саратов', 'Тюмень', 'Тольятти', 'Ижевск'];
// Создаю массив крупнейших городов России для дальнейшего использования в Select 
const selectCity = document.querySelector('#selectCity')
document.addEventListener('DOMContentLoaded', () => {
  const inputTel = document.querySelector('#input-phone');
  const maskOptions = { mask: '+{7} (000) 000-00-00' }
  IMask(inputTel, maskOptions) // подключенная библиотека для input ввода телефона
  
function AllFormEvents(){
  const inputs = document.querySelectorAll('.regitr__field');
  inputs.forEach((input) => {
    const inputVal = input.value.trim()
    if (inputVal === '') {
      input.style.borderColor = '#80ba26';
    }
    else {
      input.style.borderColor = '#435259';
    }
  }); // проверка наполнения каждого input, при клике на form, если input пустой, то меняется цвет border
}// Функция создана для повторного использования обработчика для touch event

  const form = document.querySelector('.registr__form');
  form.addEventListener('mouseover', AllFormEvents);
  form.addEventListener('touchstart', AllFormEvents);

  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1;
  let yyyy = today.getFullYear();
  let dateFiile = document.getElementById('date')
  if (dd < 10) {
    dd = '0' + dd
  }
  if (mm < 10) {
    mm = '0' + mm
  }
  today = yyyy + '-' + mm + '-' + dd;
  dateFiile.setAttribute("max", today);
  // установка максимальной даты рождения. (Все дни из будущего выбрать нельзя)
  arrCities.map((city => {
    let newCity = document.createElement('option');
    newCity.innerHTML = city;
    selectCity.appendChild(newCity);
  })) // цикл для перебора каждого элемента массива и создания option внутри которого будет элемент
  
  // Бургер меню
  const menuBtn = document.querySelector('.header__menu');
  const menu = document.querySelector('.header__list');
  const span = document.querySelector('.header__menu-span');
  const body = document.querySelector('body')
 
  menuBtn.addEventListener('click', () => {
    menu.classList.toggle('header__list--active');
    menuBtn.classList.toggle('header__menu--active');
    span.classList.toggle('header__menu-span--active');
    body.classList.toggle('stop-scrolling')
  })
})

