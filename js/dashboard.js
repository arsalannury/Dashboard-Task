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
    let dropdown = document.querySelector('.items-navbar');
    if (dropdown.dataset.active === 'hide') {

        dropdown.classList.add('navbar_dropdownActive');
        dropdown.dataset.active = 'active';

    }else {
        
        dropdown.classList.remove('navbar_dropdownActive');
        dropdown.dataset.active = 'hide';

  
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
i();


// :: :: :: :: :: :: :: ::
//  change password modal
// :: :: :: :: :: :: :: ::
const modalEl = document.querySelector('.changePasswordModal');
const changePassBtn = document.querySelector('#changePassBtn');
changePassBtn.addEventListener('click', () => {
    modalEl.classList.add('modalActive');
});

// cancel change password modal
const cancelChangePass = document.querySelector('#modal_changePasswordCancel');
cancelChangePass.addEventListener('click', () => {
    modalEl.classList.remove('modalActive');
}); 

// confirm change password modal
const confirmChangePass = document.querySelector('#modal_changePasswordConfirm');
const newPass = document.querySelector('#newPass');
const repeatPass = document.querySelector('#repeatPass');

confirmChangePass.addEventListener('click', () => {
    if (newPass.value === repeatPass.value) {

    }else {
        document.querySelector('.modal_alertTxt').classList.add('modal_alertTxtActive')
    }
}); 