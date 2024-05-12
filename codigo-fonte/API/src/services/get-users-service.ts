import { IUsersRepository } from "@/repositories/interfaces/iusers-repository";
import { ResourceNotFoundError } from "./errors/resource-not-found-error";

export interface GetUsersServiceRequest {
  username: string;
}

type User = {
  id: string;
  name: string;
  email: string;
};

interface GetUsersServiceResponse {
  users: User[];
}

export class GetUsersService {
  constructor(private usersRepository: IUsersRepository) {}

  async execute({
    username,
  }: GetUsersServiceRequest): Promise<GetUsersServiceResponse> {
    const users = await this.usersRepository.findByName(username);
    if (!users) throw new ResourceNotFoundError();

    const mappedUsers: User[] = users.map(user => ({
      id: user.id,
      name: user.name,
      email: user.email
    }));

    return { users: mappedUsers }
  }
}
