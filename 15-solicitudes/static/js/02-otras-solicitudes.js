fetch('https://jsonplaceholder.typicode.com/posts/5', {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        title: 'Nuevo titulo',
        body: 'Nueva descripcion'
    })
})
.then(respuesta => respuesta.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));


/*fetch('https://jsonplaceholder.typicode.com/posts/5', {
    method: 'DELETE',
    })
.then(respuesta => respuesta.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));



fetch('https://jsonplaceholder.typicode.com/posts/5', {
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        title: 'Nuevo titulo'
    })
})
.then(respuesta => respuesta.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));*/