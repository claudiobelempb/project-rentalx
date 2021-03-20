import { Category } from '../model/Category';

interface ICategoriesRepositoryDTO {
  name: string;
  description: string;
  created_at: Date;
  updated_at: Date;
}

interface ICategoriesRepository {
  index(): Category[] | undefined;
  show(id: string): Category[] | undefined;
  create({ name, description, created_at, updated_at }: Category): void;
  findByName(name: string): ICategoriesRepositoryDTO;
  findById(id: string): ICategoriesRepositoryDTO;
}

export { ICategoriesRepository , ICategoriesRepositoryDTO};