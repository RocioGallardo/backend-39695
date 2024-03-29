const btnLogout = document.getElementById('btnLogout')


btnLogout?.addEventListener('click', e => {

    fetch('/api/sessions/logout', {
    method: 'GET',
    headers: {'Content-Type': 'application/json'}
    })
    .then(result => {
        if (result.status === 200) {
            window.location.replace('/login')
        }
    })
})
