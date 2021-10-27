const userIcon = document.querySelector('.user-icon');
const itemsNavbar = document.querySelector('.items-navbar');
const sidebarMenu = document.querySelector('.items-child-sidebar');
const managerItem = document.querySelector('.manager-item');
const signOut = document.querySelector('.sign-out');
const addUser = document.getElementById('adduser');
const usersList = document.getElementById('userlist');
const userName = document.querySelector('.user-name');

// :: :: :: :: :: :: :: ::
//  navbar menu JS
// :: :: :: :: :: :: :: ::
userIcon.addEventListener('click',(e) => {

    if(userIcon.id === 'navigation_dropdownActive'){

        itemsNavbar.classList.remove('navbar_dropdownHide');
        itemsNavbar.classList.add('navbar_dropdownActive');
        userIcon.id = 'navigaiton_dropdown_hide';

    }else if(userIcon.id === 'navigaiton_dropdown_hide'){

        itemsNavbar.classList.remove('navbar_dropdownActive');
        itemsNavbar.classList.add('navbar_dropdownHide');
        userIcon.id = 'navigation_dropdownActive';
        
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

// :: :: :: :: :: :: :: ::
//  Sign Out button
// :: :: :: :: :: :: :: ::
signOut.addEventListener('click',(e) => {
    setTimeout(() => {location.replace(' ./Login.html') },1000)
})

// :: :: :: :: :: :: :: ::
//  go to add user page
// :: :: :: :: :: :: :: ::
addUser.addEventListener('click',(e) => {
    setTimeout(() => {location.href = './AddUser.html' },1000)
})

// :: :: :: :: :: :: :: ::
//  go to users page
// :: :: :: :: :: :: :: ::
usersList.addEventListener('click' , (e) => {
    setTimeout(() => {location.href = './Users.html' },1000)
})



function i(){
    let local = localStorage.getItem('userName');
    userName.innerText = JSON.parse(local)
}
i()