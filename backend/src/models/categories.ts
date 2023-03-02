import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database";

interface CategoriesInstance extends Model {
    id: number,
    name: string,
}

export const Category = sequelize.define<CategoriesInstance>(
    'categories',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
    }
);