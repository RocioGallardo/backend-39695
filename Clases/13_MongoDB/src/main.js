// BASES DE DATOS

/*
Bases de datos relacionales
generalmente se trabaja con tablas , OBJETOS PLANOS

Persona {
    dni: '88345678',
    nombre: 'marian',
    edad: 37,
    direccion: 1,
}

Persona {
    dni: '12349999',
    nombre: 'pepe',
    edad: 37,
    direccion: 2,
}

Persona {
    dni: '64564564',
    nombre: 'juana',
    edad: 37,
    direccion: 2,

_____________________________

Telefono {
    dniPersona: '88345678',
    cod_pais: '+54'
    area: '011',
    numero: '123456789'
}

Telefono {
    dniPersona: '88345678',
    cod_pais: '+54'
    area: '011',
    numero: '88888888'
}

Telefono {
    dniPersona: '12349999
    cod_pais: '+54'
    area: '011',
    numero: '123456789'
}

______________________

Direccion {
    idDireccion: 1,
    calle: 'rivadavia',
    numero: 1234,
    cp: 1150
}

Direccion {
    id: 2,
    calle: 'rivadavia',
    numero: 1234,
    cp: 1150
}


bases de datos NO relacionales



guardados quizá en una carpeta "personas" y cada archivo con nombre de su identificador:

{
    dni: 123456789
    nombre: "marian",
    edad: 37,
    dirección: {
        calle: "rivadavia",
        numero: 123,
        cp: 1150
    },
    telefonos:[
        {cod_pais: "+54"
        area: "011"
        numero: "123456789"}]
}

*/