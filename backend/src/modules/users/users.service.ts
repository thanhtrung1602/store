import { PrismaService } from './../../prisma.service';
import { Injectable } from '@nestjs/common';
import { UsersDto } from './dto/user.model';

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}
  async getAllUser(): Promise<UsersDto[]> {
    return this.prismaService.users.findMany();
  }

  async updateUser(userData: UsersDto, id: number) {
    return this.prismaService.users.update({
      where: {
        user_id: id,
      },
      data: userData,
    });
  }
}
