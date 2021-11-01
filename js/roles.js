
const createRoleBtn = document.querySelector('#create__role');
const roletableBodyEl = document.querySelector('#roles__list');



var rolesList = [];

function loadRolesList() {
    roletableBodyEl.innerHTML = "";

    rolesList = roleRepo.getRoles();

    rolesList.forEach((role, index) => {
        var eachRowNode = document.createElement("Tr");
        eachRowNode.classList.add('each-row');
        eachRowNode.dataset.id = role.id;
        localStorage.setItem('id',role.id)
        eachRowNode.innerHTML = `

        <td>${index + 1}</td>
        <td>${role.title}</td>
    
            <td>
                <button class="role__edit t1" data-toggle="tooltip" title="Edit" 
                    onclick="window.location.href='./Editrole.html?id=${role.id}'"><i class="fas fa-list"></i></button>
    
                <button class="deleteBtn role__trash" id="role__trash" data-bs-toggle="modal" 
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
    }, 50);});



function shownDeleteRoleModal(roleId) {
    document.querySelector('#delete-role-modal-confirm-btn').addEventListener('click', function () {
        roleRepo.deleteRole(roleId);
        setTimeout(() => {
            loadRolesList();
        }, 50);
    });
}