function crear() {
    let miUsuario = document.getElementById("txtUsuario").value;
    let miClave = document.getElementById("txtClave").value;

    try {
        fetch('http://localhost:3000/create', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user: miUsuario,
                pass: miClave
            })
        })
            .then(respuesta => respuesta.text())
            .then(data => {
                alert(data);
            })
            .catch(error => { throw new Error("Error en la solicitud: " + error) })
    } catch (error) {
        console.error(error)
    }
}