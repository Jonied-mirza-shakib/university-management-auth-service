import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import { AcademicSemesterValidation } from './academicSemister.validation';
import { AcademicSemesterController } from './academicSemister.controler';
const router = express.Router();

router.post(
  '/create-semester',
  validateRequest(AcademicSemesterValidation.createAcademicSemesterZodSchema),
  AcademicSemesterController.createSemester
);

router.get('/',AcademicSemesterController.getAllSemesters);

export const AcademicSemesterRoutes = router;
