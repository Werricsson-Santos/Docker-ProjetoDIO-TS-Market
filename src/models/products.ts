import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database";

interface ProductInstance extends Model {
    id: number
    name: string
    description: Text
    categoryId: number
    quantity: number
    price: Float64Array
}

export const Product = sequelize.define<ProductInstance>(
    'products',
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        categoryId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'categories',
                key: 'id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'RESTRICT'
        },
        quantity: {
            type: DataTypes.INTEGER,
            defaultValue: 1,
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false
        }
    }
)