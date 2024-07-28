/*
  Warnings:

  - You are about to drop the `refreshToken` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "refreshToken" DROP CONSTRAINT "refreshToken_user_id_fkey";

-- DropTable
DROP TABLE "refreshToken";

-- CreateTable
CREATE TABLE "refreshtoken" (
    "token_id" SERIAL NOT NULL,
    "token" VARCHAR(250),
    "user_id" INTEGER,
    "expiresin" TIMESTAMP(6),
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "refreshtoken_pkey" PRIMARY KEY ("token_id")
);

-- AddForeignKey
ALTER TABLE "refreshtoken" ADD CONSTRAINT "refreshtoken_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION;
