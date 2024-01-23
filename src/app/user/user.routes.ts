import express from 'express';
import { UserController } from './user.controller';

const userController = new UserController();

const userRouter: any = express.Router();

userRouter.get('/', [], userController.list);
userRouter.post('/', [], userController.store);


export default userRouter;