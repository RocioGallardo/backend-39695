const btnForm = document.getElementById('btnForm')
const usernameInput = document.getElementById('usernameInput')
const passwordInput = document.getElementById('passwordInput')


    btnForm.addEventListener('click', e => {
        e.preventDefault()
        const obj = {
            username: usernameInput.value,
            password: passwordInput.value
        };
        fetch('/api/sessions/', {
            method: 'POST',
            body: JSON.stringify(obj),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(result => {
                if (result.status === 200) {
                    window.location.replace('/products')
                }
            })
    })
