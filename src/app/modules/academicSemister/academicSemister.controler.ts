import { RequestHandler } from 'express';
import { AcademicSemesterService } from './academicSemister.service';

const createSemester: RequestHandler = async (req, res, next) => {
  try {
    const { ...AcademicSemesterData } = req.body;
    const result = await AcademicSemesterService.createSemester(
      AcademicSemesterData
    );
    res.status(200).json({
      success: true,
      message: 'Academic semester created successfully!',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const AcademicSemesterController = {
  createSemester,
};
