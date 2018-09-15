(function () {
  'use strict';
  
  const blocksIds = [
    'figures',
    'block1',
    'block2',
    'block3'
  ];
  const menuBlocks = document.getElementsByClassName('menuBlock');
  
  const mobileHandler = () => {
    const menuLinks = document.getElementsByClassName('sideMenu_link');
    const backLinks = document.getElementsByClassName('backLink');

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
  }
  
  const desktopHandler = () => {
    const desktopMenuLinks = document.getElementsByClassName('desktopMenu_link');
    const sidebarImages = document.getElementsByClassName('images')[0];
    const sidebarItemBlocks = document.getElementsByClassName('items');
    const mainArticleContent = document.getElementsByClassName('article_main')[0];
    
    // Disable scroll for html and body tags
    document.documentElement.classList.add('disableScroll');
    document.body.classList.add('disableScroll');
    
    // Make right image and content blocks scrollable
    sidebarImages.classList.add('items-scrollable');
    Array.from(sidebarItemBlocks).forEach(item => {
      item.classList.add('items-scrollable');
    });
    
    mainArticleContent.classList.add('article-scrollable');
    
    // Hide right content blocks except for the first one
    Array.from(menuBlocks).forEach((item, index) => {
      if (index !== 0) {
        item.classList.add('visuallyhidden');
      }
    });
    
    // Adding click listeners for right top menu links
    Array.from(desktopMenuLinks).forEach((item, index) => {
      item.addEventListener('click', (event) => {
        
        event.preventDefault();
        
        
        // Remove highlight from all links
        Array.from(desktopMenuLinks).forEach(elem => {
          elem.classList.remove('desktopMenu_link-selected');  
        }); 
        
        // Highlight currently clicked link again
        item.classList.add('desktopMenu_link-selected');
        
        // Display piece of content if its index is equal to the index of clicked link
        // and hide it otherwise
        Array.from(menuBlocks).forEach((contentItem, contentIndex) => {
          index === contentIndex
            ? contentItem.classList.remove('visuallyhidden')
            : contentItem.classList.add('visuallyhidden');
        });
        
      });
    });
  }

  const resizeHandler = () => {
    const windowWidth = window.innerWidth ||
                document.documentElement.clientWidth ||
                document.body.clientWidth;
    
    // Getting calculated font size for html element - one em
    const style = window.getComputedStyle(document.documentElement, null).getPropertyValue('font-size');
    const em = parseFloat(style);
    
    if (windowWidth < 60*em) {
      //mobile handler
    } else {
      //desktop handler
    }
  };

  let doit;
  
  window.addEventListener('resize', () => {
    clearTimeout(doit);
    doit = setTimeout(resizeHandler, 200);
  });
  
  const mq = window.matchMedia( "(min-width: 60em)" );
  
  if (!mq.matches) {
    mobileHandler();
  } else {
    desktopHandler();
  }
  
}());