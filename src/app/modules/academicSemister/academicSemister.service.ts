import { IAcademicSemester } from './academicSemister.interface';
import { AcademicSemester } from './academicSemisterModel';

const createSemester = async (
  payload: IAcademicSemester
): Promise<IAcademicSemester> => {
  const result = await AcademicSemester.create(payload);
  return result;
};

export const AcademicSemesterService = {
  createSemester,
};
