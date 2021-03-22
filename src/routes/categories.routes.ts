import { Router } from 'express';
import { CategoriesRepository } from '../modules/cars/repositories/CategoriesRepository';
import { IndexCategoryService } from '../modules/cars/services/IndexCategoryService';
import { ShowCategoryService } from '../modules/cars/services/ShowCategoryService';
import { createCategoryController } from '../modules/cars/useCases/createCategory';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.get('/', (request, response) => {

  const indexCategoryService = new IndexCategoryService(categoriesRepository);

  const categories = indexCategoryService.execute();

  return response.json(categories);

});

categoriesRoutes.get('/:id', (request, response) => {
  
  const { id } = request.params;

  const showCategoryService = new ShowCategoryService(categoriesRepository);

  const category = showCategoryService.execute(id);

  return response.json(category);

});

categoriesRoutes.post('/', (request, response) => {
  return createCategoryController.handle(request, response);
});

export { categoriesRoutes };