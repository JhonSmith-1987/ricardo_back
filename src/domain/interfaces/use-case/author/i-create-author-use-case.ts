import {AuthorCreationAttributes} from "../../../entities/author-entity";
import {IResponseServerDefault} from "../../common/i-response-server-default";

export interface ICreateAuthorUseCase {
    execute(author: AuthorCreationAttributes): Promise<IResponseServerDefault>;
}