import AuthorEntity, {AuthorCreationAttributes} from "../../entities/author-entity";

export interface IAuthorRepository {
    create(author:AuthorCreationAttributes): Promise<AuthorEntity>;
    getByName(name: string): Promise<AuthorEntity|null>;
}