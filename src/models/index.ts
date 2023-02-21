import { Category } from "./categories";
import { Product } from "./products";

Category.hasMany(Product)

Product.belongsTo(Category)

export { Category, Product }