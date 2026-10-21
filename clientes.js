let clientes = [
    {cedula: "2365489657", nombre: "Juan", edad: 20},
    {cedula: "3659853145", nombre: "Mario", edad: 50},
    {cedula: "3695698514", nombre: "Pepe", edad: 22}
];

function agregarCliente(cliente) {
    let resultado;
    resultado = buscarClientes(cliente.cedula);
    if (resultado == null) {
        clientes.push(cliente);
        alert("Cliente agregado")
        mostrarClientes();
    }else {
        alert("Ya existe cliente con la cedula: "+cliente.cedula)
    }
}

function crearCliente() {
    let valorCedula = recuperaraTexto("txtCedula");
    let valorNombre = recuperaraTexto("txtNombre");
    let valorEdad = recuperarInt("txtEdad");
    let nuevoCliente = {};
    nuevoCliente.cedula = valorCedula;
    nuevoCliente.nombre = valorNombre;
    nuevoCliente.edad = valorEdad;
    agregarCliente(nuevoCliente);
}

function ejecutarBusqueda() {
    let valorCedula = recuperaraTexto("txtCedulaBusqueda");
    let cliente = buscarClientes(valorCedula);

    if (cliente == null) {
        alert("Cliente no encontrado")
    }else {
        mostrarTextoEnCaja("txtCedula", cliente.cedula);
        mostrarTextoEnCaja("txtNombre", cliente.nombre);
        mostrarTextoEnCaja("txtEdad", cliente.edad);
    }
}

function buscarClientes(cedula) {
    let elementoCliente;
    let clienteEncontrado = null; 
    for (let i=0; i<clientes.length;i++) {
        elementoCliente = clientes[i];
        if (elementoCliente.cedula == cedula) {
            clienteEncontrado = elementoCliente;
            break
        }
    }
    return clienteEncontrado;
}

function mostrarClientes() {
    let cmpTabla = document.getElementById("tablaClientes");
    let elementoCliente;
    let contenidoTabla = "<table><tr>"+
    "<th>Cedula</th>"+
    "<th>Nombre</th>"+
    "<th>Edad</th>"+
    "</tr>";
    for (i=0; i<clientes.length;i++){
        elementoCliente = clientes[i];
        contenidoTabla += "<tr><td>"+elementoCliente.cedula+"</td>"+
        "<td>"+elementoCliente.nombre+"</td>"+
        "<td>"+elementoCliente.edad+"</td>"
        "</tr>"
    }
    contenidoTabla += "</table>";
    cmpTabla.innerHTML = contenidoTabla;
}