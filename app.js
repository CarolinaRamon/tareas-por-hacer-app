

const argv = require('./config/yargs').argv;

const porHacer = require ('./por-hacer/por-hacer');

let comando = argv._[0]; //En la posición 0 está el comando.

switch (comando){

    case 'crear':
    //console.log('Crear por hacer.');
    let tarea = porHacer.crear(argv.descripcion);
    console.log(tarea);
    break;

    case 'listar':
    console.log('Mostrar todas las tareas por hacer.');
    break;

    case 'actualizar':
    console.log('Actualiza una tarea por hacer.');
    break;

    default:
        console.log('Comando no reconocido.');

}