import { Express, Request, Response } from 'express';

import userRouter from '../app/user/user.routes';
import adminRouter from '../app/admin/admin.routes';

export class RouteServiceProvider {

    public app: Express;

    constructor(app: Express) {
        this.app = app;

        this.app.get('/', (req: Request, res: Response) => {
            return res.send('Hello world');
        });
        this.app.get('/api', (req: Request, res: Response) => {
            return res.send('API working from route service provider');
        });
        //
        this.loadAdminRoutes();
        this.loadUserRoutes();
    }

    loadAdminRoutes() {
        this.app.use('/v1/admin', adminRouter);
    }

    loadUserRoutes() {
        this.app.use('/v1/user', userRouter);
    }
}