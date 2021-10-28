var usersList;
function getLsUsers() {
    let getLocalStorageData = localStorage.getItem("New List");
    if (getLocalStorageData == null) {
        usersList = [];
        // setUsers;
    } else {
        usersList = JSON.parse(getLocalStorageData);
    }
    return usersList;
}

function setUsers(users) {
    localStorage.setItem("New List", JSON.stringify(users));
}
////////////roles///////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
var localStorageKey = 'roles';

function _setRoles(roles = []) {
    localStorage.setItem(localStorageKey, JSON.stringify(roles));
}

function getRoleModel() {
    return {
        title: "admin"
    };
}
function getRoles() {
    return JSON.parse(localStorage.getItem(localStorageKey) || '[]');
}

function getRoleById(roleId) {
    return getRoles().find(role => role.id === roleId);
}

function deleteRole(roleId) {
    var roles = getRoles().filter(role => role.id !== roleId.toString());
    _setRoles(roles);
}

function createRole(newRole) {
    var roles = getRoles();
    roles.push(newRole);
    _setRoles(roles);
}


var roleRepo = {
    getRoleModel: getRoleModel,
    getRoles: getRoles,
    getRoleById: getRoleById,
    deleteRole: deleteRole,
    createRole: createRole,
};
