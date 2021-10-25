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
const addUserBtn = document.getElementById('add__User');
const cancelBtn = document.getElementById('box__cancel');

let users = getLsUsers();
let url = new URL(window.location.href);
let search_params = url.searchParams; 
const id = parseFloat(search_params.get('id'));

loadUserOnTheForm(id)

function loadUserOnTheForm(uId){
    const userIndex = users.findIndex( u => u.id === uId);

    inputUser.value= users[userIndex].username;
    firstName.value= users[userIndex].firstname;
    lastName.value= users[userIndex].lastname ;
    nationalCode.value= users[userIndex].nationalcode;
    birthDate.value= users[userIndex].birthdate;
    city.value= users[userIndex].city;
    mobile.value= users[userIndex].mobile;
    address.value= users[userIndex].address;
    role.value= users[userIndex].role;

}

function editUser(uId){
    const exists = users.findIndex( u => u.username === inputUser.value);
    const userIndex = users.findIndex( u => u.id ===uId);
    if(exists === -1 || exists === userIndex){
        document.getElementById('successful').style.display="block";
        users[userIndex].username= inputUser.value;
        users[userIndex].firstname= firstName.value;
        users[userIndex].lastname= lastName.value;
        users[userIndex].nationalcode= nationalCode.value;
        users[userIndex].birthdate= birthDate.value;
        users[userIndex].city= city.value;
        users[userIndex].mobile= mobile.value;
        users[userIndex].address= address.value;
        users[userIndex].role= role.value;

        setUsers(users);
        setTimeout(()=>window.location.href = "./Users.html", 1200)
    }
    else{
        document.getElementById('usernameError').style.display="block";
    }
    
}

formEl.addEventListener('submit' , (e) =>{
    e.preventDefault();
    editUser(id);
});

cancelBtn.addEventListener('click', () => {
    window.location.href = "./Users.html";  
});

inputUser.addEventListener('keyup', () =>
        document.getElementById('usernameError').style.display="none");