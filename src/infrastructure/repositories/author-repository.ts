import {IAuthorRepository} from "../../domain/interfaces/repositories/i-author-repository";
import AuthorEntity, {AuthorCreationAttributes} from "../../domain/entities/author-entity";

export class AuthorRepository implements IAuthorRepository {

    constructor() {
    }

    async create(author: AuthorCreationAttributes): Promise<AuthorEntity> {
        try {
            return await AuthorEntity.create(author);
        } catch (error) {
            console.error('**** este es el error al crear un nuevo autor ****');
            console.error(error);
            throw error;
        }
    }

    async getByName(name: string): Promise<AuthorEntity | null> {
        try {
            return await AuthorEntity.findOne({
                where: {
                    name: name
                }
            });
        } catch (error) {
            console.error('**** este es el error al obtener el autor por el nombre *****');
            console.error(error);
            throw error;
        }
    }
}