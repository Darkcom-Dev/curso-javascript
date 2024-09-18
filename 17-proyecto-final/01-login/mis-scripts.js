contador = 0;

function login() {
    let miUsuario = document.getElementById("txtUsuario").value;
    let miPass = document.getElementById("txtPass").value;

    var usuarioRegex = /^[a-zA-Z0-9]+$/;
    var passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

    if(miUsuario.match(usuarioRegex) && miPass.match(passRegex)) {
        if(contador < 3) {
            try {
                fetch('http://localhost:3000/login', {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        user: miUsuario,
                        pass: miPass
                    })
                })
                .then(respuesta => respuesta.json())
                .then(data => {
                    if (data.existe == 1)
                        window.location.href = "home.html";
                    else
                        contador++;
                        console.log("Login incorrecto: " + contador);
                })
                .catch(error => { throw new Error("Error en la solicitud: " + error) })
            } catch (error) {
                console.error(error)
            }
        } else {
            //Metodo de la API que bloquee al usuario en la base de datos
            console.log("Usuario bloqueado: " + miUsuario);
        }
    }
    else {
        alert("El nombre de usuario o el password no cumple con las condiciones");
    }
}

limitarCaracteres(document.getElementById("txtUsuario"), 20);
limitarCaracteres(document.getElementById("txtPass"), 20);

function limitarCaracteres(input, maxLength) {
    input.addEventListener("input", function() {
        if(input.value.length > maxLength) {
            input.value = input.value.slice(0, maxLength)
        }
    });
}