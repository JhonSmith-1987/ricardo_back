import  express from "express";
import { Request, Response } from 'express';
import {ICreateAuthorUseCase} from "../../domain/interfaces/use-case/author/i-create-author-use-case";

export default function AuthorRouter(
    createAuthorUseCase: ICreateAuthorUseCase,
) {

    const router = express.Router();

    router.post('/create', async (req: Request, res: Response) => {
        try {
            const response = await createAuthorUseCase.execute(req.body);
            res.status(200).send(response);
        } catch (error) {
            res.status(500).send({
                status: 500,
                message: 'Error interno del servidor',
            });
        }
    });



    return router;
}