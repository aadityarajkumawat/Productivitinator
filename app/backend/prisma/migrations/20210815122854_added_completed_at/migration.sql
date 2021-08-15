/*
  Warnings:

  - Added the required column `completedAt` to the `CollegeTask` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CollegeTask" ADD COLUMN     "completedAt" TIMESTAMP(3) NOT NULL;
