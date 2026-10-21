let clientes = [
    {cedula: "2365489657", nombre: "Juan", edad: 20},
    {cedula: "3659853145", nombre: "Mario", edad: 50},
    {cedula: "3695698514", nombre: "Pepe", edad: 22}
];

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