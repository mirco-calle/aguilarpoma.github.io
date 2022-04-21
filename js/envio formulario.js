

const btnEnvio=document.getElementById("enviarCorreo")

btnEnvio.addEventListener("click",e=>{
    e.preventDefault()
    const nombre = document.getElementById("nombre").value
    const email = document.getElementById("email").value
    const telefono = document.getElementById("telefono").value
    const nombreEmpresa = document.getElementById("nombreEmpresa").value
    const mensaje = document.getElementById("mensaje").value
    
    window.location.href=`mailto:mirkex.guitar@gmail.com?subject=envioDesdeForm&body=nombre%3A${nombre}%0Acorreo%3A${email}%0Amensaje%3A${mensaje}%0Amensaje%3A${telefono}%0Amensaje%3A${nombreEmpresa}`
   

})
