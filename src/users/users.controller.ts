import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  @Get()
  getAllUsers(
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  ) {
    const usersService = new UsersService();
    console.log(limit);
    console.log(page);

    return usersService.getAllUsers();
  }

  @Get(':id')
  getUserById(@Param() param: any) {
    console.log(param);

    const usersService = new UsersService();
    return usersService.getUserById(1);
  }

  @Post()
  createUser(@Body(new ValidationPipe()) user: CreateUserDto) {
    const usersService = new UsersService();
    usersService.createUser(user);
    return 'User created successfully';
  }
}
