import { Router } from 'express';
import { CategoriesRepository } from '../repositories/CategoriesRepository';
import { CreateCategoryService } from '../services/CreateCategoryService';
import { IndexCategoryService } from '../services/IndexCategoryService';
import { ShowCategoryService } from '../services/ShowCategoryService';

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
  const { name, description } = request.body;

  const createCategoryService = new CreateCategoryService(categoriesRepository);

  const category = {
    name,
    description,
    created_at: new Date(),
    updated_at: new Date()
  }
  createCategoryService.execute(category);
  
  return response.status(201).send();

});

export { categoriesRoutes };