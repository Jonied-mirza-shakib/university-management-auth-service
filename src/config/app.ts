import express, { Application } from 'express';
import cors from 'cors';
import globalErrorHandler from '../app/middleware/globalHandlerError';
import { UserRoutes } from '../app/modules/users/user.route';
import { AcademicSemesterRoutes } from '../app/modules/academicSemister/academicSemister.route';
// import ApiError from '../errors/ApiError'
const app: Application = express();

app.use(cors());

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Application routes

app.use('/api/v1/users/', UserRoutes);
app.use('/api/v1/academic-semesters', AcademicSemesterRoutes);

// Testing
// app.get('/',async(req: Request, res: Response,next:NextFunction) => {
//     throw new Error('Testing Error Logger')
// })

// GLOBAL ERROR HANDLER
app.use(globalErrorHandler);

export default app;
