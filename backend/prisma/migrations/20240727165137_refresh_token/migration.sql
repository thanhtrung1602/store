-- CreateTable
CREATE TABLE "refreshToken" (
    "token_id" SERIAL NOT NULL,
    "token" VARCHAR(250) NOT NULL,
    "user_id" INTEGER,
    "expiresIn" TIMESTAMP(3),
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "refreshToken_pkey" PRIMARY KEY ("token_id")
);

-- AddForeignKey
ALTER TABLE "refreshToken" ADD CONSTRAINT "refreshToken_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION;
