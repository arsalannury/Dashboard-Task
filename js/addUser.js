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

let users = getLsUsers()
let roles = roleRepo.getRoles();

function addUser() {
  const exists = users.findIndex(u => u.username === inputUser.value)
  if (exists === -1) {
    if (pass.value === cPass.value) {
      document.getElementById('successful').style.display = 'block'
      let user = {
        id: Math.floor(Math.random() * 10000000000),
        username: inputUser.value,
        firstname: firstName.value,
        lastname: lastName.value,
        nationalcode: nationalCode.value,
        birthdate: birthDate.value,
        city: city.value,
        mobile: mobile.value,
        address: address.value,
        role: role.value,
        password: pass.value,
        images: {}
      }
      users.push(user)
      document.forms[0].reset()
      setUsers(users)
      setTimeout(() => (window.location.href = './Users.html'), 1200)
    } else {
      document.getElementById('confirmError').style.display = 'block'
    }
  } else {
    document.getElementById('usernameError').style.display = 'block'
  }
}

formEl.addEventListener('submit', e => {
  e.preventDefault()
  addUser()
})

cancelBtn.addEventListener('click', () => {
  window.location.href = './Users.html'
})

cPass.addEventListener(
  'keyup',
  () => (document.getElementById('confirmError').style.display = 'none')
)

// items for option tag in choose role //
window.addEventListener('load', (e) => {
  roles.forEach(item => {
    role.innerHTML += `<option value="${item.id}">${item.title}</option>`
  })
})

inputUser.addEventListener(
  'keyup',
  () => (document.getElementById('usernameError').style.display = 'none')
)