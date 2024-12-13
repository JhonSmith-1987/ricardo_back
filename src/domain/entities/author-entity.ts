import { DataTypes, Model, Optional } from "sequelize";
import {sequelize} from '../../infrastructure/config/sequelizeConfig';

export interface AuthorAttributes {
    id: string;
    name: string;
    lastname: string;
}

export interface AuthorCreationAttributes extends Optional<AuthorAttributes, 'id'> {}

class AuthorEntity extends Model<AuthorAttributes, AuthorCreationAttributes> implements AuthorAttributes {
    public id!: string;
    public name!: string;
    public lastname!: string;
}

AuthorEntity.init({
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
    lastname: {
        field: 'lastname',
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize,
    tableName: 'authors'
});

export default AuthorEntity;