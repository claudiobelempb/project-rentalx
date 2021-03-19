import Category from '../model/Category';
import { CategoriesRepository } from '../repositories/CategoriesRepository';

class IndexCategoryService {

  constructor(private categoriesRepository: CategoriesRepository){};

  execute(): Category[] | undefined {

    const categories = this.categoriesRepository.index();

    return categories;

  }
}

export { IndexCategoryService };