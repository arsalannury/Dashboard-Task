
let users = getLsUsers();

showUsers();
    


function showUsers() {
    let usersListEl = document.getElementById('users__list');
    let newUser = "";
    users.forEach((user,index) => {

        newUser += `
            <tr id="user__tr">
            <td>${index+1}</td>
            <td>${user.username}</td>
            <td>${user.firstname}</td>
            <td>${user.lastname}</td>
            <td>${user.nationalcode}</td>
            <td>${user.birthdate}</td>
            <td>${user.city}</td>
            <td>${user.mobile}</td>
            <td>${user.address}</td>
            <td>${user.role}</td>
            <td class="text-center">
                <button class="user__edit t1" data-toggle="tooltip" title="Edit" 
                        onclick="window.location.href='./EditUser.html?id=${user.id}'"><i class="fas fa-edit"></i></button>

                <button onclick="changePass(${user.id})" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop"
                         class="user__key "  title="Change Password"><i class="fas fa-key"></i></button>  

                <button class="deleteBtn user__trash" id="user__trash" data-bs-toggle="modal" 
                        data-bs-target="#staticBackdrop2" onclick="setDeleteId(${user.id})" 
                        data-toggle="tooltip" title="Delete"><i class="fa fa-trash"></i></button>
            </td>
            </tr>
        `;
    });
    usersListEl.innerHTML = newUser;
}

function setDeleteId(uId) {
    var d = document.getElementById("deleteUserBtn");
    d.setAttribute('delete-id' , uId);
    localStorage.removeItem('userName')
}

document.getElementById("deleteUserBtn").onclick = function() {

    var uId = this.getAttribute('delete-id');
    
    let userIndex = users.findIndex(u => u.id == uId);
    users.splice(userIndex , 1);
    setUsers(users);
    showUsers();

}

function changePass(id){
    console.log(usersList)
    var d = document.getElementById("changePass");
    d.setAttribute('data-id' , id);
}

document.getElementById("changePass").onclick = function() {

   var id=this.getAttribute('data-id')
   var pass=document.getElementById('password').value;
   var repeatPass=document.getElementById('repeatPass').value;

   if(pass.length > 0){
        if(pass===repeatPass){

            let user=usersList.findIndex(i=>i.id==id)
                users[user].password= pass;
                setUsers(users);
                document.getElementById("errorChangePass").innerHTML = "";
                document.getElementById("successChangePass").innerHTML = "Successfuly changed";
                setTimeout(()=>window.location.href = "./Login.html", 1200)

        }else {
            document.getElementById("errorChangePass").innerHTML = "Confirm password is not equal to password.";
        }
    }
    else{
        document.getElementById("errorChangePass").innerHTML = "Password is empty";
    }
};