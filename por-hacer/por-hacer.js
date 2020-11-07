

const fs = require('fs'); //File system


//Guardamos las tareas en un arreglo:
let listadoPorHacer = [];

const guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer); //Esta función convierte un objeto en un json válido.

    fs.writeFile('database/data.json', data, (err)=>{
        if (err) throw new Error ('No se pudo grabar', err);
    });
}

const cargarDB = () => {
    try {
        listadoPorHacer = require ('../database/data.json');//Como estamos en un lenguaje que se encuentra del lado del servidor podemos hacer un require directamente de ese archivo y la función al detectar que es un archivo json automáticamente lo convierte en un objeto de Javascript.
    } catch (error) {
        listadoPorHacer = [];//El fallo puede deberse a que la database esté vacía. [] ya representa un archivo json válido. Así siempre voy a tener aunque sea un arreglo vacío.
    }

    //console.log(listadoPorHacer);
}


const crear = (descripcion) => {

    cargarDB();

    let porHacer={
        // descripcion: descripcion, //En ECMAScript 6 esto es redundante.
        descripcion,
        completado: false //Por defecto, las tareas que se crean no están completas.
    };

    listadoPorHacer.push(porHacer);

    guardarDB();

    return porHacer;
}

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}

module.exports = {
    crear,
    getListado
}