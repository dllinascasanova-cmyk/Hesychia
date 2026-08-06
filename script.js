// ======================================
// HESYCHIA.CAT
// ======================================

// HEADER SCROLL

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});



// SCROLL SUAVE

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const destino = document.querySelector(this.getAttribute("href"));

        if(destino){

            destino.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});




// FORMULARIO

const formulario = document.getElementById("pedidoForm");

if(formulario){

    formulario.addEventListener("submit", function(e){

        e.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();

        const ciudad = document.getElementById("ciudad").value.trim();

        const producto = document.getElementById("producto").value;

        const talla = document.getElementById("talla").value;

        if(

            nombre === "" ||

            ciudad === "" ||

            producto === "" ||

            talla === ""

        ){

            alert("Por favor completa todos los campos.");

            return;

        }

        // CAMBIA ESTE NÚMERO

        const numero = "573003237347";

        const mensaje =

`Hola Hesychia.Cat.

Quiero realizar el siguiente pedido.

Nombre: ${nombre}

Ciudad: ${ciudad}

Diseño: ${producto}

Talla: ${talla}`;

        const url =

`https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

        window.location.href = url;

        formulario.reset();

    });

}
