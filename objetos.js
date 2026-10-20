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

function crearCliente() {
    let cliente = {
        cedula: "11565496344",
        nombre: "Pepito"
    }
    let cliente1 = {}
    cliente1.nombre = "Ramiro";
    cliente1.apellido = "Salazar";
    cliente1.cedula = "2136548975";
}

function probarIncrementarSaldo() {
    let cuenta = {
        numero: "2569874563",
        saldos: 34.0
    }
    incrementarSaldo(cuenta, 100);
    console.log(cuenta.saldos);
}

function incrementarSaldo(cuenta, monto) {
    cuenta.saldos += monto;
}

function probarDeterminarMayor() {
    let per1 = {
        nombre: "daniel",
        edad: 45
    }
    let per2 = {
        nombre: "alfredo",
        edad: 48
    }
    let mayor;
    mayor = determinarMayor(per1, per2);
    if (mayor != null) {
        console.log("El mayor es:" + mayor.nombre);
    }
    
}

function determinarMayor(persona1, persona2) {
    if (persona1.edad>persona2.edad) {
        return persona1;
    }else if (persona2.edad > persona1.edad) {
        return persona2;
    }else {
        return null;
    }
}