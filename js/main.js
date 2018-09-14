(function () {
  'use strict';
  
  const menuBlocks = document.getElementsByClassName('menuBlock');
  const menuLinks = document.getElementsByClassName('sideMenu_link');
  const backLinks = document.getElementsByClassName('backLink');
  const blocksIds = [
    'figures',
    'block1',
    'block2',
    'block3'
  ];  
  
  Array.from(menuBlocks).forEach((item) => {
    item.classList.add('mobileSliding');
  });
  
  Array.from(menuLinks).forEach((item, index) => {
    item.addEventListener('click', (event) => {
      event.preventDefault();
      document.getElementById(blocksIds[index]).style.right = '0';
      document.getElementById('page_top').style.left = '-100%';
      document.getElementsByClassName('article_main')[0].style.left = '-100%';
      setTimeout(() => {
        document.getElementsByClassName('article_main')[0].classList.add('visuallyhidden');
      }, 500);
    });
  });
  
  Array.from(backLinks).forEach((item, index) => {
      item.addEventListener('click', (event) => {
      event.preventDefault();
      document.getElementById(blocksIds[index]).style.right = '-100%';
      document.getElementById('page_top').style.left = '0';
      document.getElementsByClassName('article_main')[0].style.left = '0';
      document.getElementsByClassName('article_main')[0].classList.remove('visuallyhidden');
    });
  });
  
}());