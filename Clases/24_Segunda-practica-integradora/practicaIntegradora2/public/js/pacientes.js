const pacientesRegisterForm = document.querySelector('#pacientesRegisterForm')

if (pacientesRegisterForm instanceof HTMLFormElement) {
  pacientesRegisterForm.addEventListener('submit', async e => {
    e.preventDefault()

    const input_dni = document.querySelector('#input_dni')
    const input_nombre = document.querySelector('#input_nombre')
    const input_apellido = document.querySelector('#input_apellido')
    const input_edad = document.querySelector('#input_edad')


    if (
      !(input_dni instanceof HTMLInputElement)
      || !(input_nombre instanceof HTMLInputElement)
      || !(input_apellido instanceof HTMLInputElement)
      || !(input_edad instanceof HTMLInputElement)
    ) return

    const data = {
      dni: input_dni.value,
      nombre: input_nombre.value,
      apellido: input_apellido.value,
      edad: input_edad.value,
    }

    const response = await fetch('/api/pacientes', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if (response.status === 201) {
      alert('paciente agregado!')
      window.location.reload()
    }
  })
}

const logoutForm = document.querySelector('#logoutForm')

if (logoutForm instanceof HTMLFormElement) {
  logoutForm.addEventListener('submit', e => {
    e.preventDefault()
    fetch('/api/sesiones', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(result => {
        if (result.status === 204) {
          window.location.href = '/'
        }
      })
  })
}

function irAPag(limit, pagDeseada) {
  if (!pagDeseada) {
    const input_pag_deseada = document.querySelector('#input_pag_deseada')
    if (input_pag_deseada instanceof HTMLInputElement) {
      pagDeseada = input_pag_deseada.value
    }
  }
  window.location.href = `/pacientes?limit=${limit}&page=${pagDeseada}`
}

