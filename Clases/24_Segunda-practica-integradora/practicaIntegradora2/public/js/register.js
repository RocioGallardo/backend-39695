const registerForm = document.getElementById('registerForm')

if (registerForm instanceof HTMLFormElement) {
    registerForm.addEventListener('submit', async e => {
        e.preventDefault()

        const input_username = document.querySelector('#username')
        const input_password = document.querySelector('#password')

        if (
            !(input_username instanceof HTMLInputElement)
            || !(input_password instanceof HTMLInputElement)
        ) return

        const data = {
            username: input_username.value,
            password: input_password.value,
        }

        const response = await fetch('/api/usuarios', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (response.status === 201) {
            window.location.replace('/')
        }
    })
}