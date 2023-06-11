import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { academicSemesterTitleCodeMapper } from './academicSemister.constant';
import { IAcademicSemester } from './academicSemister.interface';
import { AcademicSemester } from './academicSemisterModel';
import { IPaginationOptions } from '../../../interfaces/interface';
import { IGenericResponse } from '../../../interfaces/common';
import { paginationHelper } from '../../../helpers/paginationHelper';
import { SortOrder } from 'mongoose';

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
  const {page,limit,skip,sortBy,sortOrder}=paginationHelper.calculatePagination(paginationOptions)

  const sortConditions:{[key:string]:SortOrder}={}

  if(sortBy && sortOrder){
    sortConditions[sortBy]=sortOrder;
  }

  const result = await AcademicSemester.find().sort(sortConditions).skip(skip).limit(limit);

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
