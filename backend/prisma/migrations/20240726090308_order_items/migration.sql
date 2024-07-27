/*
  Warnings:

  - Added the required column `user_id` to the `orderitems` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "categories_name_key";

-- AlterTable
ALTER TABLE "orderitems" ADD COLUMN     "user_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "orderitems" ADD CONSTRAINT "orderitems_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION;
