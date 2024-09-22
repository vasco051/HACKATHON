export type TAdminCategory = {
  id: number;
  name: string;
  description: string;
  photoUrl: string;
}

export type TAdminCategoryCreate = {
  name: string;
  description: string;
  photoUrl: string;
}