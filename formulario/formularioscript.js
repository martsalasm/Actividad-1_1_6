const name = document.getElementById("nombre")
const teléfono = document.getElementById("telefono")
const form  = document.getElementById("form")

const regex = /\d/;

form.addEventListener("submit", (e)=>{

    if(regex.test(nombre.value)){
        alert("Tu nombre no puede contener números!")
        e.preventDefault()
    }
    else if(nombre.value.length<3){
        alert("Tu nombre debe tener más de dos letras")
        e.preventDefault()
    }

    else if(!correo.value.includes(".com")){
        alert("tu correo debe terminar en .com!")
        e.preventDefault()
    }

    else if (isNaN(telefono.value)){
        alert("El telefono no puede contener letras")
        e.preventDefault()
    }
    else if (telefono.value.length<9 || telefono.value.length>9){
        alert("El teléfono debe ser de 9 digitos. Por ejemplo, 91123456")
        e.preventDefault()
    }

    else if (mensaje.value.length<15){
        alert("tu mensaje debe ser un poco más largo...")
        e.preventDefault()
    }
    else {
        document.write("")
        alert ("Mensaje enviado!")
        e.preventDefault()
    }
})