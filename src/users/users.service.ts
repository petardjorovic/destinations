import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}
  getAllUsers() {
    return this.prisma.user.findMany();
  }

  // getUserById(id: number) {
  //   return this.users.find((user) => user.id === id);
  // }

  createUser(user: CreateUserDto) {
    return this.prisma.user.create({ data: user });
  }

  // deleteUser(id: number) {
  //   return (this.users = this.users.filter((user) => user.id !== id));
  // }
}
