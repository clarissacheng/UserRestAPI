import express from 'express';
import {getUsers, createUser, getUser, deleteUser, updateUser} from '../controllers/users.js';

const router = express.Router(); 

//GET, POST, GET ID, DELETE, and PATCH routes 
router.get('/', getUsers);
router.post('/', createUser);
router.get('/:id', getUser);
router.delete('/:id', deleteUser);
router.patch('/:id', updateUser);

export default router;

//Test 