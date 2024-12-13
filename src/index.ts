import express from 'express';
import cors from "cors";
import dotenv from 'dotenv';
import {sequelize} from './infrastructure/config/sequelizeConfig';
import path from 'path';

// entities import
import './domain/entities/author-entity';
import './domain/entities/book-entity';
import './domain/entities/asociation-entities';
import {AuthorRepository} from "./infrastructure/repositories/author-repository";
import {setupMiddlewareAuth} from "./presentation/setup-middleware/setup-middleware-author";

export const app = express();
dotenv.config();

app.use(express.json());
app.use(cors({origin: '*'}));
app.use('/storage', express.static(path.join(__dirname, 'storage')));

const port = process.env.PORT || 4000;


// instance class
const authorDataStore = new AuthorRepository();


// llamar el setup
const authorMiddleware = setupMiddlewareAuth(authorDataStore);


// use endpoints
app.use('/api/author', authorMiddleware);





async function main() {
    try {
        await sequelize.sync({force: false});
        app.listen(port, () => {
            console.log('port ==> ', port);
        });
    } catch (error) {
        console.error(`Hubo un error al conectar a la base de datos: ${error}`);
    }
}

main().then();