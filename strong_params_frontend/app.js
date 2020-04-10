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
        console.log(user)
    }
})