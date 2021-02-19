// import { init } from './js/usuarios-page';

// import { obtenerUsuarios } from './js/http-provider';

import * as CRUD from './js/crud-provider';
import { init } from './js/archivos-page';

// init();

// obtenerUsuarios().then(console.log);

/* CRUD.getUsuario(2).then(console.log);

CRUD.crearUsuario({
    name: 'Miguel',
    job: 'Carpintero'
}).then(console.log);

CRUD.actualizarUsuario(1, {
    name: 'Melissa',
    job: 'Developer'
}).then(console.log);

CRUD.borrarUsuario(1).then(console.log); */

init();