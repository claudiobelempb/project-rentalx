import { Category }  from '../model/Category';
import { ICategoriesRepository, ICategoriesRepositoryDTO } from './ICategoriesRepository';

class CategoriesRepository implements ICategoriesRepository {
  private categories: Category[];

  constructor(){
    this.categories = [];
  }

  index(): Category[]{
    return this.categories;
  }

  show(id: string): Category[] | undefined {
    const category = this.categories.filter(categoryId => categoryId.id === id);
    return category;
  }

  create({ name, description, created_at, updated_at }: ICategoriesRepositoryDTO): void {

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

  findById(id: string): Category {
    const categoryIdExists = this.categories.find(categoryId => categoryId.id === id);
    return categoryIdExists;
  }

}

export { CategoriesRepository };