import {
  ApiBody,
  ApiCreatedResponse,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { UsersDto } from './dto/user.dto';
import { UsersService } from './users.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get('getAllUsers')
  @ApiResponse({ status: 200, description: 'Get all users', type: [UsersDto] })
  async getAllUsers(): Promise<UsersDto[]> {
    try {
      const users = await this.usersService.getAllUser();
      return users;
    } catch (error) {
      throw error;
    }
  }

  @Post('updateUser/:id')
  @ApiCreatedResponse({
    description: 'update user',
  })
  @ApiBody({ description: 'create Product', type: UsersDto })
  async updateUser(@Body() usersDto: UsersDto, @Param('id') id?: number) {
    try {
      const updateUser = await this.usersService.updateUser(
        usersDto,
        Number(id),
      );
      return updateUser;
    } catch (error) {
      throw error;
    }
  }
}
