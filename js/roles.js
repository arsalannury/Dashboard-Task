var localStorageKey = 'roles';

function _setRoles(roles = [])
{
    localStorage.setItem(localStorageKey, JSON.stringify(roles));
}

function getModel()
{
    return {
       title:"admin"
    };
}
function getRoles()
{
    return JSON.parse(localStorage.getItem(localStorageKey) || '[]');
}

function getRoleById(roleId)
{
    return getRoles().find(role => role.id === roleId);
}

function deleteRole(roleId)
{
    var roles = getRoles();
    var deletedRoleIndex = getRoles().findIndex(role => role.id === roleId);
    roles.splice(deletedRoleIndex, 1);
    _setRoles(roles);
}

function createRole(newRole)
{
    var roles = getRoles();
    roles.push(newRole);
    _setRoles(roles);
}

function updateRole(updatedRole)
{
    var roles = getRoles();
    var updatedRoleIndex = getRoles().findIndex(role => role.id === updatedRole.id);
    roles[updatedRoleIndex] = updatedRole;
    _setRoles(roles);
}

var roleRepo = {
    getModel: getModel,
    getRoles: getRoles,
    getRoleById: getRoleById,
    deleteRole: deleteRole,
    createRole: createRole,
    updateRole: updateRole
};

const createRoleBtn = document.querySelector('#create__role');
