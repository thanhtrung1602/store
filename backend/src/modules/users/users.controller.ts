import { UsersDto } from './dto/user.model';
import { UsersService } from './users.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get('getAllUsers')
  async getAllUsers(): Promise<UsersDto[]> {
    return this.usersService.getAllUser();
  }

  @Post('updateUser/:id')
  updateUser(@Body() usersDto: UsersDto, @Param('id') id?: number) {
    return this.usersService.updateUser(usersDto, Number(id));
  }
}
