interface ICourse {
  name: string;
  duration: number;
  educator: string;
}
class CreateCourseService {
  public async execute({ name, duration, educator }: ICourse){
    console.log(name, duration, educator);
  }
}

export default new CreateCourseService();