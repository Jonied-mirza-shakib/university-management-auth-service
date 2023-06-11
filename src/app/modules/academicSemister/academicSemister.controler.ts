import { NextFunction, Request, Response } from 'express';
import { AcademicSemesterService } from './academicSemister.service';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendRespons';
import httpStatus from 'http-status';
import { IAcademicSemester } from './academicSemister.interface';
import pick from '../../../shared/pick';
import { paginationFields } from '../../../constants/pagination';

const createSemester = catchAsync(async (req:Request, res:Response,next:NextFunction) => {
    const { ...AcademicSemesterData } = req.body;
    const result = await AcademicSemesterService.createSemester(
      AcademicSemesterData
    );
    
    
    sendResponse<IAcademicSemester>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Aademic semester created successfully!',
      data: result,
    });
    next();
  }
);


const getAllSemesters= catchAsync(
  async(req: Request,res:Response,next:NextFunction)=>{

const paginationOptions=pick(req.query,paginationFields)


    const result =await AcademicSemesterService.getAllSemesters(paginationOptions)

 sendResponse<IAcademicSemester[]>(res,{
      statusCode:httpStatus.OK,
      success:true,
      message:"Semesters retrieved successfully",
      meta: result.meta,
      data:result.data
    });
next();
  }
)


export const AcademicSemesterController = {
  createSemester,
  getAllSemesters
};
