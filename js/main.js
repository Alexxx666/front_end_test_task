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

    // Move items that are revealed with menu clicks to the right of viewport
    Array.from(menuBlocks).forEach((item) => {
      item.classList.add('mobileSliding');
    });
    
    // Event listeners for menu clicks - 
    // main content is positioned to the left of the screen and right block slides in
    Array.from(menuLinks).forEach((item, index) => {
      item.addEventListener('click', (event) => {
        event.preventDefault();
        document.getElementById(blocksIds[index]).style.right = '0';
        document.getElementById('page_top').style.left = '-100%';
        document.getElementsByClassName('article_main')[0].style.left = '-100%';
        // Hide main content after animation is complete to not spoil the scroll
        setTimeout(() => {
          document.getElementsByClassName('article_main')[0].classList.add('visuallyhidden');
        }, 500);
      });
    });

    // Handler for back links
    // - reverses what has been done via menu click
    Array.from(backLinks).forEach((item, index) => {
        item.addEventListener('click', (event) => {
        event.preventDefault();
        document.getElementsByClassName('article_main')[0].classList.remove('visuallyhidden');
        document.getElementById(blocksIds[index]).style.right = '-100%';
        document.getElementById('page_top').style.left = '0';
        document.getElementsByClassName('article_main')[0].style.left = '0';
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
        item.classList.add('hidden');
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
            ? contentItem.classList.remove('hidden')
            : contentItem.classList.add('hidden');
        });
        
      });
    });
  }

  // Class that detects and stores css breakpoint
  const breakpoint = {};
  breakpoint.refreshValue = function () {
    this.value = window.getComputedStyle(document.querySelector('body'), ':before').getPropertyValue('content').replace(/\"/g, '');
  };
  
  breakpoint.refreshValue();
  
  const resizeHandler = () => {
    const previousScreen = breakpoint.value;
    breakpoint.refreshValue();
    const currentScreen = breakpoint.value;
    
    if (previousScreen === 'mobile' && currentScreen === 'desktop') {
      // Handler for switching from mobile to desktop
      location.reload(); 
    } else if (previousScreen === 'desktop' && currentScreen === 'mobile') {
      // Handler for switching from desktop to mobile
      location.reload(); 
    }
  };

  // Resize handler is called only after 200ms has passed
  let resizeTimer;
  
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(resizeHandler, 200);
  });
  
  // Detect which screen we're on and call corresponding handler
  const mq = window.matchMedia( "(min-width: 60em)" );
  
  if (!mq.matches) {
    mobileHandler();
  } else {
    desktopHandler();
  }
  
}());