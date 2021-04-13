
if(window.innerWidth <= 768){

  function expandSection(element) {
    const sectionHeight = element.scrollHeight;
    
    element.style.height = sectionHeight + 'px';
  
    element.addEventListener('transitionend', function(e) {
      element.removeEventListener('transitionend', arguments.callee);
      
      element.style.height = sectionHeight;
    });
    
    element.setAttribute('data-collapsed', 'false');
  }
  
  function collapseSection(element) {
    const sectionHeight = element.scrollHeight;
    
    const elementTransition = element.style.transition;
    element.style.transition = '';
    
    requestAnimationFrame(function() {
      element.style.height = sectionHeight + 'px';
      element.style.transition = elementTransition;
      
      requestAnimationFrame(function() {
        element.style.height = 0 + 'px';
      });
    });
    
    element.setAttribute('data-collapsed', 'true');
  }
  
}


document.querySelectorAll('.link-menu').forEach(select =>{
  select.querySelector('div').addEventListener('click', ()=> {
    const section = select.querySelector('.list-items.collapsible')
    const isCollapsed = section.getAttribute('data-collapsed') === 'true';

    if(isCollapsed) {
      select.querySelector('div img').style.transform = 'rotate(180deg)'
      expandSection(section)
      section.setAttribute('data-collapsed', 'false')
    } else {
      select.querySelector('div img').style.transform = 'rotate(0deg)'
      collapseSection(section)
    }
  })
})

let show = true
document.querySelector(".hamb").addEventListener('click',()=>{
  document.querySelector(".nav-links").classList.toggle('responsive',show)
  document.querySelector(".nav-navbar img.hamb").src = show ? '/images/icon-close.svg' : '/images/icon-hamburger.svg'
  document.body.style.overflow = show ? 'hidden' : 'initial'
  show = !show
})



