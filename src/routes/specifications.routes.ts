import { Router } from 'express';

import { SpecificationsRepository } from '../modules/cars/repositories/implementations/SpecificationsRepository';
import { createSpecificationController } from '../modules/cars/useCases/createSpecification';
import { IndexSpecificationService } from '../modules/cars/services/IndexSpecificationService';

const specificationRoutes = Router();
const specificationRepository = new SpecificationsRepository();

specificationRoutes.get('/', (request, response) => {

  const indexSpecificationService = new IndexSpecificationService(specificationRepository);

  const specifications = indexSpecificationService.execute();

  return response.json(specifications);

});

specificationRoutes.post('/', (request, response) => {

  
  return createSpecificationController.handle(request, response);

});

export { specificationRoutes };