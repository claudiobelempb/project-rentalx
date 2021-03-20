import { ICategoriesRepository } from "../repositories/ICategoriesRepository";

interface IRequest {
  name: string;
  description: string;
  created_at: Date;
  updated_at: Date;
}

class CreateCategoryService {

  constructor(private categoriesRepository: ICategoriesRepository){}

  execute({name, description}: IRequest): void {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name);

    if(categoryAlreadyExists){
      // return response.status(400).json({error: 'Category already exists!'});
      throw new Error('Category already exists!');
    }

    this.categoriesRepository.create({
      name,
      description,
      created_at: new Date(),
      updated_at: new Date()
    });

  }

}

export { CreateCategoryService };