//funcion settimeout para mostrar mensaje mediante promesa
const showMsg = () => {
    return new Promise((res) => {
        setTimeout(() => {
            console.log('Información enviada')
            res()
        }, 3000);
    })
};

const consumeAPI = async () => {
    const url = 'https://jsonplaceholder.typicode.com/photos'
    try{
        let response = await fetch(url)
        const data = await response.json()
        //crear constante que solo selecciona los primeros 20 elementos de data
        const primeros20 = data.slice(0,20)
        console.log(primeros20)
        //metodo forEach que itera por cada uno de los 20 indices y los imprime en la consola
        data.slice(0, 20).forEach(element => {
            console.log('id:', element.id,' ', 'title:', element.title)
        });
    } catch (error) {
        console.error(error)
    }
};
//funcion asincrona que ejecuta funciones anteriores
async function init(){
    await consumeAPI()
    await showMsg()
}

init()




