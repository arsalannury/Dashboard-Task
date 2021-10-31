const formEl = document.getElementById('box__form');
const inputUser = document.getElementById('box__username');
const firstName = document.getElementById('box__firstname');
const lastName = document.getElementById('box__lastname');
const nationalCode = document.getElementById('box__nationalcode');
const birthDate = document.getElementById('box__birthdate');
const city = document.getElementById('box__city');
const mobile = document.getElementById('box__mobile');
const address = document.getElementById('box__address');
const role = document.getElementById('box__role');
const pass = document.getElementById('box__pass');
const cPass = document.getElementById('box__cPass');
const addUserBtn = document.getElementById('add__User');
const cancelBtn = document.getElementById('box__cancel');
const contDropDownRole = document.querySelector('.container_dropdown');

let users = getLsUsers();;

function addUsers() {
    const exists = users.findIndex( u => u.username === inputUser.value);
    if(exists === -1){
        if(pass.value === cPass.value){
            document.getElementById('successful').style.display="block";
            let user = {
                id: Math.floor(Math.random()*10000000000),
                username: inputUser.value,
                firstname: firstName.value,
                lastname: lastName.value,
                nationalcode: nationalCode.value,
                birthdate: birthDate.value,
                city: city.value,
                mobile: mobile.value,
                address: address.value,
                role: role.value,
                password: pass.value
            };
            users.push(user);
            document.forms[0].reset();
            setUsers(users);
            setTimeout(()=>window.location.href = "./Users.html", 1200)
        }
        else{
            document.getElementById('confirmError').style.display="block";
        }
    }
    else{
        document.getElementById('usernameError').style.display="block";
    }
    
}

formEl.addEventListener('submit' , (e) =>{
    e.preventDefault();
    addUsers();
});

cancelBtn.addEventListener('click', () => {
    window.location.href = "./Users.html";  
});

cPass.addEventListener('keyup', ()=> 
        document.getElementById('confirmError').style.display="none");

inputUser.addEventListener('keyup', () =>
        document.getElementById('usernameError').style.display="none");



// drop down for roles //
 
window.addEventListener('load',(e) => {
    
    const getRolesItems = JSON.parse(localStorage.getItem('roles'));
    const rolesItem = getRolesItems;

    rolesItem.forEach(element => {

        let dynamicId = Math.floor(Math.random() * 10000)
        const roleShow = document.createElement('div');
        roleShow.className = 'role_item_dropdown';
        roleShow.id = dynamicId ;
        contDropDownRole.appendChild(roleShow); 
        roleShow.innerHTML +=  element.title

    })

})
// set input role value //
contDropDownRole.addEventListener('click',(e) => {

    if(e.target.className !== 'role_item_dropdown') return;
     const children = contDropDownRole.children;

     Array.from(children).forEach((element,i) => {
      role.value = e.target.innerText
     })
     
})
// show dropDown & hide dropDown //
role.addEventListener('click',(e) => {
    
      if(role.attributes.itemid.value === 'active'){
        contDropDownRole.style.display = 'unset';
        role.attributes.itemid.value = 'hide'
      }else if(role.attributes.itemid.value === 'hide'){
        contDropDownRole.style.display = 'none';
        role.attributes.itemid.value = 'active'
      }

})