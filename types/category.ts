interface ICategory {
  category: string;
  img: string;
  example: string[];
  color: string;
}

export interface ICategories extends Array<ICategory> {}
