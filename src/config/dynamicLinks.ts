export const dynamicLinks = {
  category: (id: number | string) => `/categories/${id}`,
  courseBoard: (categoryId: number | string, courseId: string | number) => `/categories/${categoryId}/courses/${courseId}`,

  // admin
  adminCategory: (categoryId: number | string) => `/admin/categories/${categoryId}`,
  adminCourse: (categoryId: number | string, courseId: string | number) => `/admin/categories/${categoryId}/courses/${courseId}`
}