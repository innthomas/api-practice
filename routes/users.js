import express from 'express';
import {createUser, updateUser, deleteUser,getUser,getUsers} from '../contollers/users.js'


const router = express.Router();



router.get('/',getUsers);

router.get('/:id',getUser);



router.delete('/:id',deleteUser);

router.patch('/:id',updateUser);



router.post('/',createUser)

export default router