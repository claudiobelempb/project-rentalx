import Category  from '../model/Category';

interface ICreateCategories {
  name: string;
  description: string;
  created_at: Date;
  updated_at: Date;
}

class CategoriesRepository {
  private categories: Category[];

  constructor(){
    this.categories = [];
  }

  index(): Category[]{
    return this.categories;
  }

  create({ name, description, created_at, updated_at }: ICreateCategories): void {

    const category = new Category();

    Object.assign(category, {
      name,
      description,
      created_at,
      updated_at
    });

    this.categories.push(category);

  }

  findByName(name: string): Category {

    const categoryNameExists = this.categories.find(categoryName => categoryName.name == name);
    return categoryNameExists;
    
  }

}

export { CategoriesRepository };