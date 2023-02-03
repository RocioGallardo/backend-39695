// Administrador de paquetes NPM

//[0,1)

const cantidades = {}


for(let i = 0; i<10 ; i++){
    const randNum = (Math.random() * 20 + 1)
    const randSinDecimales = Math.floor(randNum)
    if (!cantidades[randSinDecimales]){
        cantidades[randSinDecimales] = 0
    }
    cantidades[randSinDecimales]++
}
console.log(cantidades)
