const contactForm = document.getElementById("contacto")
const errorDiv = document.getElementById("error")

contactForm.onsubmit = function(event){
    event.preventDefault()
    console.log(event)
    const nombre = event.target.nombre.value
    const email = event.target.email.value
    const asunto = event.target.asunto.value
    const mensaje = event.target.mensaje.value

    
    if(nombre!="" && email!="" && asunto!="" && mensaje!=""){
        console.log("Datos correctos!")
        event.target.submit()
    }else{
        errorDiv.innerHTML=""
        const p = document.createElement("p")
        p.innerText = "Datos incorrectos! Favor de verificar"
        errorDiv.appendChild(p)
    }

    // Regular expresions
}