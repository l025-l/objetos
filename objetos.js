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