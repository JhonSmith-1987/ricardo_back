import AuthorRouter from "../routes/author-router";
import {CreateAuthorUseCase} from "../../domain/use-cases/author/create-author-use-case";
import {AuthorService} from "../../domain/services/author-service";
import {AuthorRepository} from "../../infrastructure/repositories/author-repository";


export function setupMiddlewareAuth(
    authorDataStore: AuthorRepository,
) {
    return AuthorRouter(
        new CreateAuthorUseCase(new AuthorService(authorDataStore)),
    );
}