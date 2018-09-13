(function () {
  'use strict';
  
  Array.from(document.getElementsByClassName('hide')).forEach((item) => {
    item.classList.add('hideVisually');
  });
  
  document.getElementsByClassName('sideMenu_link')[0].addEventListener('click', (event) => {
    event.preventDefault();
    document.getElementById('figures').style.width = '100%';
  });
  
}());