function probarAtributos() {
    let persona = {
        nombre: "Cristian",
        apellido: "Dahua",
        edad: 26,
        estaVivo: true
    }
    console.log(persona.nombre);
    console.log(persona.edad);
    if (persona.estaVivo == false){
        console.log("No esta vivo");
    }else{
        console.log("Esta vivo");
    }
}

function modificarAtributos() {
    let cuenta = {
        numeros: "5422642",
        saldos: 0.0
    }
    console.log(cuenta.saldos);
    cuenta.saldos = 100;
    console.log(cuenta.saldos);
    cuenta.saldos += 10;
    console.log(cuenta.saldos)
}