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
let roles = roleRepo.getRoles();


loadUserOnTheForm(id)

// items for option tag in choose role //
window.addEventListener('load', (e) => {
    roles.forEach(item => {
        role.innerHTML += `<option value="${item.id}"
         ${users[users.findIndex(user => user.id == id)].role == item.id && "selected"}
         >
         ${item.title}
         </option>`
    })
})

function loadUserOnTheForm(userId) {
    const currentUser = users[users.findIndex(user => user.id == userId)]
    inputUser.value = currentUser.username;
    firstName.value = currentUser.firstname;
    lastName.value = currentUser.lastname;
    nationalCode.value = currentUser.nationalcode;
    birthDate.value = currentUser.birthdate;
    city.value = currentUser.city;
    mobile.value = currentUser.mobile;
    address.value = currentUser.address;
    role.value = currentUser.role;
}

function editUser(userId) {
    const exists = users.findIndex(u => u.username === inputUser.value);
    const userIndex = users.findIndex(u => u.id === userId);
    if (exists === -1 || exists === userIndex) {
        document.getElementById('successful').style.display = "block";
        currentUser.username = inputUser.value;
        currentUser.firstname = firstName.value;
        currentUser.lastname = lastName.value;
        currentUser.nationalcode = nationalCode.value;
        currentUser.birthdate = birthDate.value;
        currentUser.city = city.value;
        currentUser.mobile = mobile.value;
        currentUser.address = address.value;

        setUsers(users);
        setTimeout(() => window.location.href = "./Users.html", 1200)
    }
    else {
        document.getElementById('usernameError').style.display = "block";
    }

}



formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    editUser(id);
});

cancelBtn.addEventListener('click', () => {
    window.location.href = "./Users.html";
});

inputUser.addEventListener('keyup', () =>
    document.getElementById('usernameError').style.display = "none");