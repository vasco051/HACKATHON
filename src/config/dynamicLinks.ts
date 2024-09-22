export const dynamicLinks = {
  category: (id: number | string) => `/categories/${id}`,
  courseBoard: (categoryId: number | string, courseId: string | number) => `/categories/${categoryId}/courses/${courseId}`,

  // admin
  adminCourse: (categoryId: number | string, courseId: string | number) => `/admin/categories/${categoryId}/courses/${courseId}`
}