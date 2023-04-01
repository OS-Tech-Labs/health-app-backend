-- CreateTable
CREATE TABLE "DoctorTimetable" (
    "doctorId" TEXT NOT NULL,
    "weeklyPlan" JSONB NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "DoctorTimetable_doctorId_key" ON "DoctorTimetable"("doctorId");

-- AddForeignKey
ALTER TABLE "DoctorTimetable" ADD CONSTRAINT "DoctorTimetable_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "Doctor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
