// Подключена библиотека Chart.js для графиков

// График для первого блока
document.addEventListener("DOMContentLoaded", () => {
const labels = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
]; // На графиках будет статистика за полгода

const data = {
  labels: labels,
  datasets: [{
    label: 'Количество новых пользователей',
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgb(255, 99, 132)',
    data: [0, 10, 5, 2, 20, 30, 45],
  }]
}; // Стиль граффика

const config = {
  type: 'line', 
  data: data,
  options: {}
};// вид графика
const myChart1 = new Chart(
  document.getElementById('myChart1'),
  config
); // отрисовка

// График для второго блока
const data2 = {
  labels: labels,
  datasets: [{
    label: 'Заказы крупной техники',
    backgroundColor: 'rgb(255,165,0)',
    borderColor: 'rgb(255,165,0)',
    data: [10, 15, 35, 20, 20, 30, 45],
  }]
};

const config2 = {
  type: 'bar', 
  data: data2,
  options: {}
};

const myChart2 = new Chart(
  document.getElementById('myChart2'),
  config2
);

// График для третьего блока
const data3 = {
  labels: labels,
  datasets: [{
    label: 'Количество комментариев',
    backgroundColor: 'rgb(165,206,102)',
    borderColor: 'rgb(165,206,102)',
    data: [28, 20, 35, 39, 38, 30, 50],
  }]
};

const config3 = {
  type: 'bar',
  data: data3,
  options: {}
};

const myChart3 = new Chart(
  document.getElementById('myChart3'),
  config3
);

// График для четвертого блока

const data4 = {
  labels: labels,
  datasets: [{
    label: 'Количество запросов в поисковиках',
    backgroundColor: 'rgb(66,170,255)',
    borderColor: 'rgb(66,170,255)',
    data: [12, 17, 26, 31, 38, 45, 51],
  }]
};

const config4 = {
  type: 'line',
  data: data4,
  options: {}
};

const myChart4 = new Chart(
  document.getElementById('myChart4'),
  config4
);
// Бургер меню
  const menuBtn = document.querySelector('.header__menu');
  const menu = document.querySelector('.header__list');
  const span = document.querySelector('.header__menu-span');
  const body = document.querySelector('body');
  menuBtn.addEventListener('click', () => {
    menu.classList.toggle('header__list--active');
    menuBtn.classList.toggle('header__menu--active');
    span.classList.toggle('header__menu-span--active');
    body.classList.toggle('stop-scrolling')
  })
})
