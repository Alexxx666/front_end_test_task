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
        document.getElementById('page_top').style.left = '-100%';
        document.getElementsByClassName('article_main')[0].style.left = '-100%';
        setTimeout(() => {
          document.getElementsByClassName('article_main')[0].classList.add('visuallyhidden');
        }, 500);
    });
  });
  
  Array.from(document.getElementsByClassName('backLink')).forEach((item, index) => {
      item.addEventListener('click', (event) => {
      event.preventDefault();
      document.getElementById(blocks[index]).style.right = '-100%';
        document.getElementById('page_top').style.left = '0';
        document.getElementsByClassName('article_main')[0].style.left = '0';
        document.getElementsByClassName('article_main')[0].classList.remove('visuallyhidden');
    });
  })
  
}());