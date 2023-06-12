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
    year: z.string({
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

const updateAcademicSemesterZodSchema = z
  .object({
    body: z.object({
      title: z
        .enum([...academicsemeterTitle] as [string, ...string[]], {
          required_error: 'Title is Required',
        })
        .optional(),
      year: z
        .string({
          required_error: 'Year is required',
        })
        .optional(),
      code: z
        .enum([...academicsemeterCode] as [string, ...string[]])
        .optional(),

      startMonth: z
        .enum([...academicsemesterMonths] as [string, ...string[]], {
          required_error: 'Start month is needed',
        })
        .optional(),
      endMonth: z
        .enum([...academicsemesterMonths] as [string, ...string[]], {
          required_error: 'End month is needed',
        })
        .optional(),
    }),
  })
  .refine(
    data =>
      (data.body.title && data.body.code) ||
      (data.body.title && !data.body.code),
    {
      message: 'Either both title and code should be provided or neither',
    }
  );

export const AcademicSemesterValidation = {
  createAcademicSemesterZodSchema,
  updateAcademicSemesterZodSchema,
};
