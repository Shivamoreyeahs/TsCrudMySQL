import express from 'express';
// import {createUser,signIn,updateUser,deleteUser} from '../controllers/userController';
import {createUser} from '../controllers/userController';


export const router = express.Router();

router.post('/signup', createUser);

