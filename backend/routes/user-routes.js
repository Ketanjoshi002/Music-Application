import express from 'express';
import {userController} from '../controllers/user-controller.js';
export const userRoutes = express.Router();
userRoutes.post('/like', userController.like);
userRoutes.get('/like', userController.getliked);