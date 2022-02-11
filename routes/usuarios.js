
 const {usuariosGet, usuariosPut, usuariosPost, usuariosDelete, usuariosPatch} = require ('../controllers/usuarios')
const {Router } = require('express'); // saca la funcion Router de la clase express

const router = Router();


router.get('/',usuariosGet); // no se coloca () porque se pone la referencia al metodo en vez de ejecutarlo desde aca. Esto es para que cuando se envien los datos de req y res se envien al controller y no se envien a este metodo


router.put('/:id', usuariosPut);// recibe la id con la variable id 

router.post('/',usuariosPost);

router.patch('/', usuariosPatch);

router.delete('/',usuariosDelete)






module.exports = router;


