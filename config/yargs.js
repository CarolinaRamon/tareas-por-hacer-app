
const descripcion = {
        demand: true,//La descripción es obligatoria.
        alias: 'd',
        desc: 'Descripción de la tarea por hacer.'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como la tarea como completada o pendiente.'
};

const argv = require('yargs')
            .command('crear', 'Crear un elemento por hacer', {
                descripcion
            })
            .command('actualizar', 'Actualiza el estado completado de una tarea.', {
                descripcion,
                completado
            })
            .command('borrar', 'Borra una tarea.', {
                descripcion
            })
            .help()
            .argv;

module.exports = {
    argv
}