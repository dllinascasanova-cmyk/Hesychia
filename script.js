function enviarWhatsApp(){

    let nombre = document.getElementById("nombre").value;
    let telefono = document.getElementById("telefono").value;
    let ciudad = document.getElementById("ciudad").value;
    let producto = document.getElementById("producto").value;
    let talla = document.getElementById("talla").value;
    let cantidad = document.getElementById("cantidad").value;


    let numeroHesychia = "573003237347"; // PON TU NUMERO AQUI


    let mensaje = 
    "Hola Hesychia.Cat 👕%0A%0A" +
    "Quiero hacer un pedido:%0A%0A" +
    "Nombre: " + nombre + "%0A" +
    "WhatsApp: " + telefono + "%0A" +
    "Ciudad: " + ciudad + "%0A" +
    "Diseño: " + producto + "%0A" +
    "Talla: " + talla + "%0A" +
    "Cantidad: " + cantidad;


    let enlace = "https://wa.me/" + numeroHesychia + "?text=" + mensaje;


    window.location.href = enlace;

}