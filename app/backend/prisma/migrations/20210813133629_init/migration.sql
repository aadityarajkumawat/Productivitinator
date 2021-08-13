-- CreateTable
CREATE TABLE "User" (
    "userId" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "username" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "Subject" (
    "subjectId" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "subjectName" TEXT NOT NULL,
    "teacher" TEXT NOT NULL,
    "credits" INTEGER NOT NULL,
    "semester" INTEGER NOT NULL,

    PRIMARY KEY ("subjectId")
);

-- CreateTable
CREATE TABLE "CollegeTask" (
    "taskId" SERIAL NOT NULL,
    "subjectId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "taskName" TEXT NOT NULL,
    "timeAssigned" TIMESTAMP(3) NOT NULL,
    "lastDate" TIMESTAMP(3) NOT NULL,
    "completed" BOOLEAN NOT NULL,

    PRIMARY KEY ("taskId")
);

-- CreateIndex
CREATE UNIQUE INDEX "User.username_unique" ON "User"("username");

-- AddForeignKey
ALTER TABLE "Subject" ADD FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CollegeTask" ADD FOREIGN KEY ("subjectId") REFERENCES "Subject"("subjectId") ON DELETE CASCADE ON UPDATE CASCADE;
