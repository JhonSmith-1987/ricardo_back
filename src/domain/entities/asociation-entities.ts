// UserEntity hasMany ClientEntity
import AuthorEntity from "./author-entity";
import BookEntity from "./book-entity";


// AuthorEntity hasMany BookEntity
AuthorEntity.hasMany(BookEntity, {
    as: 'authorBooks',
    foreignKey: 'author_id',
    onDelete: 'CASCADE',
});
BookEntity.belongsTo(AuthorEntity, {
    as: 'bookAuthor',
    foreignKey: 'author_id',
    onDelete: 'CASCADE',
});
