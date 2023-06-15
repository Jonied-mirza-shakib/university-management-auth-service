import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandler from '../app/middleware/globalHandlerError';
import router from '../app/routes';
import httpStatus from 'http-status';
import { generateFacultyId } from '../app/modules/users/user.utils';
// import ApiError from '../errors/ApiError'
const app: Application = express();

app.use(cors());

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Application routes

// app.use('/api/v1/users/', UserRoutes);
// app.use('/api/v1/academic-semesters', AcademicSemesterRoutes);
app.use('/api/v1/', router);

// Testing
// app.get('/',async(req: Request, res: Response,next:NextFunction) => {
//     throw new Error('Testing Error Logger')
// })

// GLOBAL ERROR HANDLER
app.use(globalErrorHandler);

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Not Found',
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'API Not Found',
      },
    ],
  });
  next();
});

const academicSemester = {
  code: '01',
  year: '2025',
};

const testId = async () => {
  const testId = await generateFacultyId(academicSemester);
  console.log(testId);
};
testId();
export default app;
