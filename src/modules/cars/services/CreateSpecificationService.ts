
interface IRequest {
  name: string;
  description: string;
  created_at: Date;
  updated_at: Date;
}

class CreateSpecificationService {
  execute({ name, description, created_at, updated_at }: IRequest): void {

  }
}

export { CreateSpecificationService };