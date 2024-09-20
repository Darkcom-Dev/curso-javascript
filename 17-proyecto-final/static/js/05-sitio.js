function login() {
    let miUsuario = document.getElementById("txtUsuario").value;
    let miClave = document.getElementById("txtClave").value;

    try {
        fetch('http://localhost:3000/login', {
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
            if(data === "") {
                alert("Login incorrecto");
            }
            else {
                localStorage.setItem('token', data);
                window.location.href = "home.html";
            }
        })
        .catch(error => { throw new Error("Error en la solicitud: " + error) })
    } catch (error) {
        console.error(error)
    }
}

function validar(name) {
    const token = localStorage.getItem('token');
    try {
        fetch('http://localhost:3000/validate', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                permiso: name
            })
        })
        .then(respuesta => respuesta.text())
        .then(data => {
            if(data === "") {
                alert("El usuario no tiene acceso a la pagina solicitada")
            } else {
                window.location.href = data;
            }
        })
        .catch(error => { throw new Error("Error en la solicitud: " + error) })
    } catch (error) {
        console.error(error)
    }
}