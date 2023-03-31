const registerForm = document.getElementById('registerForm')
const usernameInput = document.getElementById('inputUsernameRegister')
const passwordInput = document.getElementById('inputPasswordRegister')

if (registerForm instanceof HTMLFormElement) {
    registerForm.addEventListener('submit', e => {
        e.preventDefault()
        const user = {
            username : usernameInput.value,
            password : passwordInput.value
        }
        fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(result => {
                if (result.status === 200) {
                    window.location.replace('/login')
                }
            })
    })
}

