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
    return await this.usersService.getAllUser();
  }

  @Post('updateUser/:id')
  @ApiCreatedResponse({
    description: 'update user',
  })
  @ApiBody({ description: 'create Product', type: UsersDto })
  updateUser(@Body() usersDto: UsersDto, @Param('id') id?: number) {
    return this.usersService.updateUser(usersDto, Number(id));
  }
}
