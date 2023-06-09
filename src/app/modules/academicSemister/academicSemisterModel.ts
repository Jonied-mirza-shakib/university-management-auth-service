import { Schema, model } from 'mongoose';
import {
  IAcademicSemester,
  AcademicSemesterModel,
} from './academicSemister.interface';
import {
  academicsemesterMonths,
  academicsemeterCode,
  academicsemeterTitle,
} from './academicSemister.constant';

const academicSemesterSchema = new Schema<IAcademicSemester>(
  {
    title: {
      type: String,
      required: true,
      enum: academicsemeterTitle,
    },
    year: {
      type: Number,
      required: true,
    },
    code: {
      type: String,
      required: true,
      enum: academicsemeterCode,
    },
    startMonth: {
      type: String,
      required: true,
      enum: academicsemesterMonths,
    },
    endMonth: {
      type: String,
      required: true,
      enum: academicsemesterMonths,
    },
  },
  {
    timestamps: true,
  }
);

export const AcademicSemester = model<IAcademicSemester, AcademicSemesterModel>(
  'AcademicSemester',
  academicSemesterSchema
);
