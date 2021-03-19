import { Router } from 'express';
import Category from '../model/Category';
import { CategoriesRepository } from '../repositories/CategoriesRepository';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.get('/', (request, response) => {

  const categories = categoriesRepository.index();

  return response.json(categories)
});

categoriesRoutes.post('/', (request, response) => {
  const { name, description } = request.body;

  const categoryAlreadyExists = categoriesRepository.findByName(name);

  if(categoryAlreadyExists){
    return response.status(400).json({error: 'Category already exists!'});
  }

  categoriesRepository.create({
    name,
    description,
    created_at: new Date(),
    updated_at: new Date()
  });

  return response.status(201).send();

});

export { categoriesRoutes };