let datos = {
    title: 'Nuevo post',
    body: 'Mi contenido'
}

let miToken = 'este_es_mi_token';

axios.interceptors.request.use(
    (config) => {
        config.headers.Authorization = `Bearer ${miToken}`;
        return config;
    }, (error) => {
        return Promise.reject(error);
    }
)

axios.interceptors.response.use(
    (respuesta) => {
        respuesta.data.customField = "Nuevo Campo";
        return respuesta;
    }, (error) => {
        return Promise.reject(error)
    }
)



let pedido1 = axios.get('https://api.ejemplo.com/data1');
let pedido2 = axios.get('https://api.ejemplo.com/data2');
let pedido3 = axios.get('https://api.ejemplo.com/data3');


Promise.all([pedido1, pedido2, pedido3])
.then(([respuesta1, respuesta2, respuesta3]) => {
    //Codigo
})
.catch(error => {
    //manejar errores
})
