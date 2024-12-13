import { DataTypes, Model, Optional } from "sequelize";
import {sequelize} from '../../infrastructure/config/sequelizeConfig';

export interface BookAttributes {
    id: string;
    name: string;
    author_id: string;
}

export interface BookCreationAttributes extends Optional<BookAttributes, 'id'> {}

class BookEntity extends Model<BookAttributes, BookCreationAttributes> implements BookAttributes {
    public id!: string;
    public name!: string;
    public author_id!: string;
}

BookEntity.init({
    id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
    },
    name: {
        field: 'name',
        type: DataTypes.STRING,
        allowNull: false,
    },
    author_id: {
        field: 'author_id',
        type: DataTypes.UUID,
        allowNull: true,
    },
}, {
    sequelize,
    tableName: 'books'
});

export default BookEntity;