import express from 'express';
import { AdminController } from './admin.controller';

const adminController = new AdminController();

const adminRouter: any = express.Router();

adminRouter.get('/', [], adminController.list);
adminRouter.post('/', [], adminController.store);


export default adminRouter;