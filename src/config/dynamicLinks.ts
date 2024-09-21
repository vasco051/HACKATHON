export const dynamicLinks = {
  category: (id: number | string) => `/category/${id}`,
  courseBoard: (categoryId: number | string, courseId: string | number) => `/category/${categoryId}/course/${courseId}`
}