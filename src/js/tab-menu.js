
function updateBodyWrapperMargin() {
    var header = document.querySelector('.header');
    var bodyWrapper = document.querySelector('.body-wrapper');
    
    var headerWidth = header.offsetWidth; 
    bodyWrapper.style.marginLeft = headerWidth + 'px'; 
  }
  
  window.addEventListener('load', updateBodyWrapperMargin);
  
  window.addEventListener('resize', updateBodyWrapperMargin);
  