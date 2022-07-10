const menuButton=document.querySelector('.nav-toggle');
const navigationMenu=document.querySelector('.mobile-links');
const closeButton=document.querySelector('.nav-toggle2');
const mainWrap=document.querySelector('.main')



menuButton.addEventListener('click', () => {
  
        menuButton.style.display='none'
        closeButton.style.display = 'block'
        mainWrap.style.overflow= 'hidden'
        navigationMenu.style.transform = 'translateX(0%)'
       
})
 
    closeButton.addEventListener('click', () => {
            closeButton.style.display='none'   
            menuButton.style.display = 'block' 
            mainWrap.style.overflow= 'scroll'
            navigationMenu.style.transform = 'translateX(100%)'

            
    })