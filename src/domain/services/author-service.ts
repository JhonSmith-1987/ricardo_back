import {IAuthorService} from "../interfaces/services/i-author-service";
import {IAuthorRepository} from "../interfaces/repositories/i-author-repository";
import {AuthorCreationAttributes} from "../entities/author-entity";
import {IResponseServerDefault} from "../interfaces/common/i-response-server-default";

export class AuthorService implements IAuthorService {

    private authorRepository: IAuthorRepository;

    constructor(
        authorRepository: IAuthorRepository,
    ) {
        this.authorRepository = authorRepository;
    }

    async create(author: AuthorCreationAttributes): Promise<IResponseServerDefault> {
        try {
            const exist_author = await this.authorRepository.getByName(author.name);
            if (exist_author) {
                return {
                    status: 409,
                    message: 'Autor existente',
                }
            }
            const new_author = await this.authorRepository.create(author);
            return {
                status: 200,
                message: `Autor ${new_author.dataValues.name} creado exitosamente`,
            }
        } catch (error) {
            throw error;
        }
    }
}