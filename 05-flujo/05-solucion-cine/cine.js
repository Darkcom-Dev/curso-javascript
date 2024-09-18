let peliculas = {
    'comedia': ['Back to the Future', 'The Truman Show', 'The Wolf of Wall Street'],
    'musical': ['No hay peliculas ATP', 'El secreto de sus ojos', 'The Godfather'],
    'drama': ['Casablanca', 'The Shawshank Redemption', 'Taxi Driver'],
    'crimen': ['La La Land', 'Les Miserables', 'The Rocky Horror Picture Show']
}
let edadInput = document.getElementById('edad');
let index = 0;

function recomendar(genero) {
    let recomendacionH1 = document.getElementById('recomendacion');

    if (genero in peliculas) {
        if (+edad.value >= 16) index = 2;
        else if (+edad.value > 12 && +edad.value < 16) index = 1;
        else index = 0;

        let recomendacion = peliculas[genero][index];
        console.log(recomendacion);
        recomendacionH1.textContent = recomendacion;
    }
    

    
}