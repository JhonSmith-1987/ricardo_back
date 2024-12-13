import {ICreateAuthorUseCase} from "../../interfaces/use-case/author/i-create-author-use-case";
import {IAuthorService} from "../../interfaces/services/i-author-service";
import {AuthorCreationAttributes} from "../../entities/author-entity";
import {IResponseServerDefault} from "../../interfaces/common/i-response-server-default";

export class CreateAuthorUseCase implements ICreateAuthorUseCase {

    private authorService: IAuthorService;

    constructor(
        authorService: IAuthorService,
    ) {
        this.authorService = authorService;
    }

    async execute(author: AuthorCreationAttributes): Promise<IResponseServerDefault> {
        try {
            return await this.authorService.create(author);
        } catch (error) {
            throw error;
        }
    }
}