import { UserRole } from '@prisma/client';

export class UsersDto {
  user_id?: number;
  username?: string;
  email?: string;
  full_name?: string;
  password?: string;
  role?: UserRole;
}