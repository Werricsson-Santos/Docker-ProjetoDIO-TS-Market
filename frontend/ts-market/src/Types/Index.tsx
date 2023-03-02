export type Category = {
  id: number;
  name: string;
};



export type Product = {
  id?: number;
  name: string;
  description: string;
  categoryId: number;
  quantity: number;
  price: number;
};


export default "Index";