(function () {
  'use strict';
  
  Array.from(document.getElementsByClassName('hide')).forEach((item) => {
    item.classList.add('hideVisually');
  });
  
  const blocks = [
    'figures',
    'block1',
    'block2',
    'block3'
  ];
  
  Array.from(document.getElementsByClassName('sideMenu_link')).forEach((item, index) => {
      item.addEventListener('click', (event) => {
      event.preventDefault();
      document.getElementById(blocks[index]).style.right = '0';
    });
  });
  
  Array.from(document.getElementsByClassName('backLink')).forEach((item, index) => {
      item.addEventListener('click', (event) => {
      event.preventDefault();
      document.getElementById(blocks[index]).style.right = '-100%';
    });
  })
  
}());