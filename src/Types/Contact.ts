export type IContact = {
  id: string;
  last_name: string;
  first_name: string;
  middle_name?: string;
  tel?: number;
  email?: string;
  type_code?: string[];
  comment?: string;
  created: string;
  update: string;
};
