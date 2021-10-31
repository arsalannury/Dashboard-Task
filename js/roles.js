const createRoleBtn = document.querySelector('#create__role');
const roletableBodyEl = document.querySelector('#roles__list');
const usersWithSameRoleUl = document.querySelector('#users__with__same__role');

var rolesList = [];

function loadRolesList() {
    roletableBodyEl.innerHTML = "";

    rolesList = roleRepo.getRoles();

    rolesList.forEach((role, index) => {
        var eachRowNode = document.createElement("Tr");
        eachRowNode.classList.add('each-row');
        eachRowNode.dataset.id = role.id;

        eachRowNode.innerHTML = `

        <td>${index + 1}</td>
        <td>${role.title}</td>
            <td>
                <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#role-users-list"
                onclick="shownUserListModal(${role.id})"
                >
                <i class="fas fa-list"></i>
                </button>
    
                <button class="" id="role__trash" data-bs-toggle="modal" 
                    data-bs-target="#role-trash" onclick="shownDeleteRoleModal(${role.id})"
                    data-toggle="tooltip" title="Delete"><i class="fa fa-trash"></i></button>
            </td>
    `;

        roletableBodyEl.appendChild(eachRowNode);
    });
}

loadRolesList();


createRoleBtn.addEventListener('click', function (event) {
    event.preventDefault();
    const roleData = {
        "title": document.querySelector('#title').value,
        "id": Date.now().toString(),
    };

    roleRepo.createRole(roleData);
    setTimeout(() => {
        loadRolesList();
    }, 50);
});

function shownDeleteRoleModal(roleId) {
    document.querySelector('#delete-role-modal-confirm-btn').addEventListener('click', function () {
        roleRepo.deleteRole(roleId);
        setTimeout(() => {
            loadRolesList();
        }, 50);
    });
}

function shownUserListModal(id) {
    usersWithSameRoleUl.innerHTML = getLsUsers().filter(user => user.role == id).map(function (user) {
        return (`<li class="list-group-item">${user.role}</li>`)
    }
    ).join("")
}



