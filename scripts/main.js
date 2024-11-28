const usersList = document.querySelector('#card-container')

function fetchUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((resp) => resp.json())
    .then((data) => loadUsers(data))
    function loadUsers(data) {
        usersList.innerHTML = ""
        data.forEach(element => {
            let users_template = `            
                <h5 class="card-title">Nombre: ${element.name}</h5>    
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Nombre de usuario: ${element.username}</li>
                <li class="list-group-item">Correo electrónico: ${element.email}</li>
                <li class="list-group-item">Empresa: A ${element.company.name}</li>
            `
            usersList.innerHTML += users_template
        });
        
    }
}
fetchUsers()