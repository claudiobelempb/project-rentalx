import { Specification } from '../model/Specification';

import {SpecificationsRepository } from '../repositories/SpecificationsRepository';

class IndexSpecificationService {

  constructor(private specificationRepository: SpecificationsRepository){}

  execute(): Specification[] | undefined{

    const specification = this.specificationRepository.index();

    return specification;
    
  }

}

export { IndexSpecificationService };