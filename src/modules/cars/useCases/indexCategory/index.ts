import { IndexCategoryController } from '../../useCases/indexCategory/IndexCategoryController';
import { IndexCategoryUserCase } from "./IndexCategoryUseCase";
import { CategoriesRepository } from "../../repositories/CategoriesRepository";

const categoryRepository = new CategoriesRepository();
const indexCategoryUserCase = new IndexCategoryUserCase(categoryRepository);
const indexCategoryController = new IndexCategoryController(indexCategoryUserCase);

export { indexCategoryController };