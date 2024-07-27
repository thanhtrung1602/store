/*
  Warnings:

  - You are about to drop the column `admin_id` on the `orderitems` table. All the data in the column will be lost.
  - You are about to drop the column `admin_id` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the column `admin_id` on the `products` table. All the data in the column will be lost.
  - You are about to drop the `admin` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `user_id` on table `orderitems` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "orderitems" DROP CONSTRAINT "orderitems_admin_id_fkey";

-- DropForeignKey
ALTER TABLE "orders" DROP CONSTRAINT "orders_admin_id_fkey";

-- DropForeignKey
ALTER TABLE "products" DROP CONSTRAINT "products_admin_id_fkey";

-- AlterTable
ALTER TABLE "orderitems" DROP COLUMN "admin_id",
ALTER COLUMN "user_id" SET NOT NULL;

-- AlterTable
ALTER TABLE "orders" DROP COLUMN "admin_id";

-- AlterTable
ALTER TABLE "products" DROP COLUMN "admin_id",
ADD COLUMN     "user_id" INTEGER;

-- DropTable
DROP TABLE "admin";

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION;
