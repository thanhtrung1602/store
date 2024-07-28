import { PrismaService } from './../../prisma.service';
import { Injectable } from '@nestjs/common';
import { UsersDto } from './dto/user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}
  async getAllUser(): Promise<UsersDto[]> {
    try {
      const allUser = await this.prismaService.users.findMany();
      return allUser;
    } catch (error) {
      throw error;
    }
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
