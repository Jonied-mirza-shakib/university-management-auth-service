import { z } from 'zod';
import {
  academicsemesterMonths,
  academicsemeterCode,
  academicsemeterTitle,
} from './academicSemister.constant';
const createAcademicSemesterZodSchema = z.object({
  body: z.object({
    title: z.enum([...academicsemeterTitle] as [string, ...string[]], {
      required_error: 'Title is Required',
    }),
    year: z.number({
      required_error: 'Year is required',
    }),
    code: z.enum([...academicsemeterCode] as [string, ...string[]]),

    startMonth: z.enum([...academicsemesterMonths] as [string, ...string[]], {
      required_error: 'Start month is needed',
    }),
    endMonth: z.enum([...academicsemesterMonths] as [string, ...string[]], {
      required_error: 'End month is needed',
    }),
  }),
});

export const AcademicSemesterValidation = {
  createAcademicSemesterZodSchema,
};
