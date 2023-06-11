import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { academicSemesterTitleCodeMapper } from './academicSemister.constant';
import { IAcademicSemester } from './academicSemister.interface';
import { AcademicSemester } from './academicSemisterModel';
import { IPaginationOptions } from '../../../interfaces/interface';
import { IGenericResponse } from '../../../interfaces/common';

const createSemester = async (
  payload: IAcademicSemester
): Promise<IAcademicSemester> => {

  
if(academicSemesterTitleCodeMapper[payload.title]!== payload.code){
  throw new ApiError(httpStatus.BAD_REQUEST,'Invalid Semester Code')
}


  const result = await AcademicSemester.create(payload);
  return result;
};





const getAllSemesters= async(paginationOptions:IPaginationOptions):Promise<IGenericResponse<IAcademicSemester[]>>=>{
  const {page=1,limit=10}=paginationOptions;
  const skip=(page-1)*limit;

  const result = await AcademicSemester.find().skip(skip).limit(limit);

  const total = await AcademicSemester.countDocuments()

  return{
    meta:{
      page,
      limit,
      total,
    },
    data: result
  }
}

export const AcademicSemesterService = {
  createSemester,
  getAllSemesters
};
