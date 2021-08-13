/*
  Warnings:

  - You are about to drop the column `teacher` on the `Subject` table. All the data in the column will be lost.
  - Added the required column `instructor` to the `Subject` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Subject" DROP COLUMN "teacher",
ADD COLUMN     "instructor" TEXT NOT NULL;
