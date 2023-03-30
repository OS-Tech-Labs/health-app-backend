
CREATE TABLE "Patient" (
  "patient_id" UUID,
  "user_id" UUID,
  "first_name" VARCHAR(20),
  "last_name" VARCHAR(20),
  "email_address" VARCHAR(20),
  "contact_number" VARCHAR(20),
  "age" INTEGER,
  "weight" INTEGER,
  "allergies" xml,
  "description" VARCHAR(50),
  PRIMARY KEY ("patient_id")
);

CREATE TABLE "Treatments" (
  "treatment_id" UUID,
  "patient_id" UUID,
  "treatment" xml,
  PRIMARY KEY ("treatment_id"),
  CONSTRAINT "FK_Treatments.patient_id"
    FOREIGN KEY ("patient_id")
      REFERENCES "Patient"("patient_id")
);

CREATE TABLE "Pharmacist" (
  "pharmacist_id" UUID,
  "officer_id" UUID,
  "first_name" VARCHAR(20),
  "last_name" VARCHAR(20),
  "email_address" VARCHAR(20),
  "contact_number" VARCHAR(20),
  PRIMARY KEY ("pharmacist_id")
);

CREATE TABLE "Medicine" (
  "medicine_id" UUID,
  "medicine_name" VARCHAR(20),
  PRIMARY KEY ("medicine_id")
);

CREATE TABLE "pharmacy-drug" (
  "pharmacist_id" UUID,
  "medicine_id" UUID,
  CONSTRAINT "FK_pharmacy-drug.pharmacist_id"
    FOREIGN KEY ("pharmacist_id")
      REFERENCES "Pharmacist"("pharmacist_id"),
  CONSTRAINT "FK_pharmacy-drug.medicine_id"
    FOREIGN KEY ("medicine_id")
      REFERENCES "Medicine"("medicine_id")
);

CREATE TABLE "doctor-timetable" (
  "doctor_id" UUID,
  "weekly_plan" xml,
  PRIMARY KEY ("doctor_id")
);

CREATE TABLE "Doctor" (
  "doctor_id" UUID,
  "officer_id" UUID,
  "first_name" VARCHAR(20),
  "last_name" VARCHAR(20),
  "email_address" VARCHAR(50),
  "contact _number" VARCHAR(20),
  "specialization" VARCHAR(20),
  PRIMARY KEY ("doctor_id")
);

CREATE TABLE "bookings" (
  "booking_id" UUID,
  "patient_id" UUID,
  "doctor_id" UUID,
  "description" VARCHAR(50),
  "date" timestamp,
  PRIMARY KEY ("booking_id"),
  CONSTRAINT "FK_bookings.patient_id"
    FOREIGN KEY ("patient_id")
      REFERENCES "Patient"("patient_id"),
  CONSTRAINT "FK_bookings.booking_id"
    FOREIGN KEY ("booking_id")
      REFERENCES "Doctor"("doctor_id")
);

CREATE TABLE "User" (
  "user_id" UUID,
  "hash" VARCHAR(50),
  "user_type" VARCHAR(20),
  PRIMARY KEY ("user_id")
);

CREATE TABLE "Medical Officer" (
  "officer_id" UUID,
  "user_id" UUID,
  PRIMARY KEY ("officer_id")
);

CREATE TABLE "Chat" (
  "chat_id" UUID,
  "officer_id" UUID,
  "patient_id" UUID,
  "disabled" BOOLEAN,
  PRIMARY KEY ("chat_id"),
  CONSTRAINT "FK_Chat.patient_id"
    FOREIGN KEY ("patient_id")
      REFERENCES "Patient"("patient_id")
);

