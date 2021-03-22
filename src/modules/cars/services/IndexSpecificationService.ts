import { Specification } from '../model/Specification';

import {SpecificationsRepository } from '../repositories/SpecificationsRepository';

class IndexSpecificationService {

  constructor(private specificationsRepository: SpecificationsRepository){}

  execute(): Specification[] | undefined{

    const specification = this.specificationsRepository.index();

    return specification;

  }

}

export { IndexSpecificationService };