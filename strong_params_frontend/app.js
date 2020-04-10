document.addEventListener("DOMContentlLoaded", () => {
    console.log('adsf;k')

    function getExistingUserData() {
        fetch('http://localhost:3000/users')
        .then(response => response.json())
        .then(result => console.log(result))
    }

    getExistingUserData()
    
    const newUserForm = document.getElementById("add-new-user")
    const formSection = document.getElementById("forms-section")
    const userCardContainer = document.getElementById('user-card-container')

    newUserForm.addEventListener('submit', event => {
        event.preventDefault()
        const formData = new FormData(newUserForm)
        const name = formData.get('name')
        const username = formData.get('username')
        const email = formData.get('email')
        const password = formData.get('password')

        // to backend
        fetch('http://localhost:3000/users', {
            method:"POST",
            headers:{
                // "Accept":"application/json",
                "Content-Type":"appalication/json"
            },
            body: JSON.stringify({ //convert to json before sending back
                user:{
                    name:name,  //same attr as listed in backend
                    username:username,
                    email:email,
                    password:password
                }
            })
        })
        .then(response => response.json())
        .then(result => createUserCard(result))
    })
    
    function createUserCard() {//DOM munipulation
        //create
        const userCard = document.createElement('div')
        userCard.clsssName = 'user-card'
        const name = document.createElement('h3')
        const useranme = document.createElement('p')
        const email = document.createElement('p')

        //change
        name.innerText = user.name
        username.innerText = user.username
        email.innerText = user.email

        //append
        userCard.append(name, username, email, createEditButton(user))
        document.body.append(userCard)
    }

    function createEditButton(user, event){
        const editButton = document.createElement('button')
        editButton.innerText = "Edit User Info"
        editButton.addEventListener('click', ()=>{
            editUserInfo(user)
        })
        return editButton
    }

    function editUserInfo(user){
        const editUserInfo = document.createElement('form')
        const nameInput = document.createElement('input')
        const usernameInput = document.createElement('input')
        const emailInput = document.createElement('input')
        const passwordInput = document.createElement('input')
        const editUserButton = document.createElement('button')

        nameInput.name = "name"
        nameInput.placeholder = user.name
        usernameInput.name = "username"
        usernameInput.placeholder = user.username
        emailInput.name = "email"
        emailInput.placeholder = user.email
        passwordInput.name = "password"
        passwordInput.placeholder = "we didn't save your raw text password"

        editUserButton.innerText = "update user info"
        editUserButton.type = "submit"

        editUserForm.append(nameInput, usernameInput, emailInput, passwordInput, editUserButton)
        editUserForm.addEventListener('submit', () => {
            event.preventDefault()
            console.log('user updated')
        })
        formSection.append(editUserForm)
    }

    function patchUserInfo(){
        const formdat
    }
})