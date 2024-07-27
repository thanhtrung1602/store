/*
  Warnings:

  - You are about to drop the column `user_id` on the `products` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "products" DROP CONSTRAINT "products_user_id_fkey";

-- AlterTable
ALTER TABLE "orderitems" ADD COLUMN     "admin_id" INTEGER,
ALTER COLUMN "user_id" DROP NOT NULL;

-- AlterTable
ALTER TABLE "orders" ADD COLUMN     "admin_id" INTEGER;

-- AlterTable
ALTER TABLE "products" DROP COLUMN "user_id",
ADD COLUMN     "admin_id" INTEGER;

-- CreateTable
CREATE TABLE "admin" (
    "admin_id" SERIAL NOT NULL,
    "username" VARCHAR(50) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "full_name" VARCHAR(100),
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "role" "UserRole" NOT NULL DEFAULT 'ADMIN',

    CONSTRAINT "admin_pkey" PRIMARY KEY ("admin_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "admin_username_key" ON "admin"("username");

-- CreateIndex
CREATE UNIQUE INDEX "admin_email_key" ON "admin"("email");

-- AddForeignKey
ALTER TABLE "orderitems" ADD CONSTRAINT "orderitems_admin_id_fkey" FOREIGN KEY ("admin_id") REFERENCES "admin"("admin_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_admin_id_fkey" FOREIGN KEY ("admin_id") REFERENCES "admin"("admin_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_admin_id_fkey" FOREIGN KEY ("admin_id") REFERENCES "admin"("admin_id") ON DELETE NO ACTION ON UPDATE NO ACTION;
