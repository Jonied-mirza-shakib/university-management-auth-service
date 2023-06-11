import {
  IAcademicSemesterCode,
  IAcademicSemesterTitle,
  IAcademicSemesterMonth,
} from './academicSemister.interface';

export const academicsemeterTitle: IAcademicSemesterTitle[] = [
  'Autumn',
  'Summer',
  'Fall',
];
export const academicsemeterCode: IAcademicSemesterCode[] = ['01', '02', '03'];

export const academicsemesterMonths: IAcademicSemesterMonth[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];


export const academicSemesterTitleCodeMapper:{
  [key:string]:string
}={
  Autumn:'01',
  Summer:'02',
  Fall:'03'
}