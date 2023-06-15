import { z } from 'zod';
const createUserZodSchema = z.object({
  body: z.object({
    password: z.string().optional(),
    student: z.object({
      name: z.object({
        firstName: z.string({
          required_error: 'First Name is required',
        }),
        middleName: z.string({
          required_error: 'middle Name is required',
        }),
        lastName: z.string({
          required_error: 'last Name is required',
        }),
      }),
      dateOfBirth: z.string({
        required_error: 'Date of Birth is required',
      }),
      gender: z.enum(['male', 'female'], {
        required_error: 'Gender is required',
      }),
      bloodGroup: z.enum([], {
        required_error: 'Blood group is Required',
      }),
    }),
  }),
});

export const userValidation = {
  createUserZodSchema,
};

// await createUserZodSchema.parseAsync(req)
