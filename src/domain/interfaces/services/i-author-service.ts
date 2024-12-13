import {AuthorCreationAttributes} from "../../entities/author-entity";
import {IResponseServerDefault} from "../common/i-response-server-default";

export interface IAuthorService {
    create(author: AuthorCreationAttributes): Promise<IResponseServerDefault>;
}