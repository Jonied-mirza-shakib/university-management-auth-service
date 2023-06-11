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
import ApiError from '../../../errors/ApiError';
import httpStatus from 'http-status';

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

academicSemesterSchema.pre('save',async function(next){
  const isExist=await AcademicSemester.findOne({title: this.title,year: this.year})

  if(isExist){
    throw new ApiError(httpStatus.CONFLICT,'academic semester is already exist !')
  }
  next()
})

export const AcademicSemester = model<IAcademicSemester, AcademicSemesterModel>(
  'AcademicSemester',
  academicSemesterSchema
);


