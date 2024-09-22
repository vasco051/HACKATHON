export type TAdminCourse = {
  id: number;
  name: string;
  description: string
  photoUrl: string
  minRating: number;
  optimalRating: number
}

export type TAdminCourseCreate = {
  name: string;
  description: string
  photoUrl: string
  minRating: number;
  optimalRating: number
}