const userIcon = document.querySelector('.user-icon');
const itemsNavbar = document.querySelector('.items-navbar');
const sidebarMenu = document.querySelector('.items-child-sidebar');
const managerItem = document.querySelector('.manager-item');

// :: :: :: :: :: :: :: ::
//  navbar menu JS
// :: :: :: :: :: :: :: ::
userIcon.addEventListener('click',(e) => {
    
   if(userIcon.id === 'user-icon-id'){
       itemsNavbar.style.display = 'flex';
       userIcon.id = 'user-icon-hide';
   }else if(userIcon.id === 'user-icon-hide'){
       itemsNavbar.style.display = 'none';
       userIcon.id = 'user-icon-id';
   }

})
// :: :: :: :: :: :: :: ::
//  side bar drop down JS
// :: :: :: :: :: :: :: ::
managerItem.addEventListener('click',(e) => {

    if(managerItem.id === 'manager-id'){
        sidebarMenu.style.display = 'unset';
        managerItem.id = 'manager-id-show';
    }else if(managerItem.id === 'manager-id-show'){
        sidebarMenu.style.display = 'none';
        managerItem.id = 'manager-id';
    }
    
})






