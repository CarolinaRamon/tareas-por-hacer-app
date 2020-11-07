
const argv = require('yargs')
            .command('crear', 'Crear un elemento por hacer', {
                descripcion: {
                    demand: true,//La descripción es obligatoria.
                    alias: 'd',
                    desc: 'Descripción de la tarea por hacer.'
                }
            })
            .command('actualizar', 'Actualiza el estado completado de una tarea.', {
                descripcion: {
                    demand: true,
                    alias: 'd',
                    desc: 'Descripción de la tarea por hacer.'
                },
                completado: {
                    default: true,
                    alias: 'c',
                    desc: 'Marca como la tarea como completada o pendiente.'
                }
            })
            .command('borrar', 'Borra una tarea.', {
                descripcion: {
                    demand: true,
                    alias: 'd',
                    desc: 'Descripción de la tarea por hacer.'
                }
            })
            .help()
            .argv;

module.exports = {
    argv
}