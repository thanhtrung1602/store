/*
  Warnings:

  - You are about to drop the column `cart_id` on the `cartitems` table. All the data in the column will be lost.
  - Added the required column `user_id` to the `cartitems` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "cartitems" DROP CONSTRAINT "cartitems_cart_id_fkey";

-- AlterTable
ALTER TABLE "cartitems" DROP COLUMN "cart_id",
ADD COLUMN     "user_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "cartitems" ADD CONSTRAINT "cartitems_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION;
