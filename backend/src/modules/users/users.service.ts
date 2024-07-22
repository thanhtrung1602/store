import { PrismaService } from './../../prisma.service';
import { Injectable } from '@nestjs/common';
import { UsersDto } from './dto/user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}
  async getAllUser(): Promise<UsersDto[]> {
    return await this.prismaService.users.findMany();
  }

  async updateUser(userData: UsersDto, id: number) {
    return await this.prismaService.users.update({
      where: {
        user_id: id,
      },
      data: userData,
    });
  }
}
