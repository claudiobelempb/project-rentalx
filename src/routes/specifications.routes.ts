import { response, Router } from 'express';

import { SpecificationsRepository } from '../modules/cars/repositories/SpecificationsRepository';
import { CreateSpecificationService } from '../modules/cars/services/CreateSpecificationService';
import { IndexSpecificationService } from '../modules/cars/services/IndexSpecificationService';

const specificationRoutes = Router();
const specificationRepository = new SpecificationsRepository();

specificationRoutes.get('/', (request, response) => {

  const indexSpecificationService = new IndexSpecificationService(specificationRepository);

  const specifications = indexSpecificationService.execute();

  return response.json(specifications);
  
});

specificationRoutes.post('/', (request, response) => {

  const { name, description } = request.body;

  const createSpecificationService = new CreateSpecificationService(specificationRepository);

  const specification = {
    name,
    description
  }

  createSpecificationService.execute(specification);

  return response.status(201).send();

});

export { specificationRoutes };