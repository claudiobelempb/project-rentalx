import { ImportCategoryUseCase } from './ImportCategoryUseCase';
import { ImportCategoryController } from './importCategoryController';


const importCategoryUseCase = new ImportCategoryUseCase()
const importCategoryController = new ImportCategoryController(importCategoryUseCase);

export { importCategoryController };