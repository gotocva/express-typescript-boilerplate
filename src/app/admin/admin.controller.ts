

import { Request, Response } from 'express';
import { Admin } from './admin.model';

export class AdminController {

    public list(req: Request, res: Response) {
        return res.json({status: true});
    }

    public async store(req: Request, res: Response) {
        const user = new Admin(req.body);
        await user.save();
        return res.json({status: true, data: user});
    }
}