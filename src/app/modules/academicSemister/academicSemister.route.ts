import express from 'express';
// import { UserController } from './user.controller'
// import { userValidation } from './user.validation';
import validateRequest from '../../middleware/validateRequest';
import { AcademicSemesterValidation } from './academicSemister.validation';
import { AcademicSemesterController } from './academicSemister.controler';
const router = express.Router();

router.post(
  '/create-semester',
  validateRequest(AcademicSemesterValidation.createAcademicSemesterZodSchema),
  AcademicSemesterController.createSemester
);

export const AcademicSemesterRoutes = router;
