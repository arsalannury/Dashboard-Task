var usersList;
function getLsUsers (){
    let getLocalStorageData = localStorage.getItem("New List");
    if(getLocalStorageData == null){
        usersList = [];
        // setUsers;
    }else{
        usersList = JSON.parse(getLocalStorageData);
    }
    return usersList;
}

function setUsers(users){
    localStorage.setItem("New List", JSON.stringify(users));
}
