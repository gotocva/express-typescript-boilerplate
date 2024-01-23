

import { Request, Response } from 'express';
import { User } from './user.model';

export class UserController {

    public list(req: Request, res: Response) {
        return res.json({status: true});
    }

    public async store(req: Request, res: Response) {
        const user = new User(req.body);
        await user.save();
        return res.json({status: true, data: user});
    }
}