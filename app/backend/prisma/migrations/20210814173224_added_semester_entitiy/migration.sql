-- CreateTable
CREATE TABLE "Semester" (
    "metaId" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "semester" INTEGER NOT NULL DEFAULT 0,
    "semesterStart" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "semesterEnd" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("metaId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Semester_userId_unique" ON "Semester"("userId");

-- AddForeignKey
ALTER TABLE "Semester" ADD FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE CASCADE ON UPDATE CASCADE;
