import { Router } from 'express';
import { v4 as uuid } from 'uuid';

const categoriesRoutes = Router();

const categories = [];

categoriesRoutes.post('/categories', (request, response) => {
  const { name, description } = request.body;

  const category = {
    id: uuid(),
    name,
    description,
    created_at: Date(),
    updated_at: Date()
  }

  categories.push(category);

  return response.status(201).json(category);

});

export { categoriesRoutes };