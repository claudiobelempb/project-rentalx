import { Router } from 'express';
import { CategoriesRepository } from '../modules/cars/repositories/implementations/CategoriesRepository';
import { ShowCategoryService } from '../modules/cars/services/ShowCategoryService';
import { createCategoryController } from '../modules/cars/useCases/createCategory';
import { indexCategoryController } from '../modules/cars/useCases/indexCategory';

const categoriesRoutes = Router();
const categoriesRepository = CategoriesRepository.getInstance();

categoriesRoutes.get('/', (request, response) => {
  return indexCategoryController.handle(request, response);
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