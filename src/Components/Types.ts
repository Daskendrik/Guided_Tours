//Сущности
export type Contact = {
  id: number;
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
export type DataSet = {
  id: string;
  value: string;
  type: string;
  lable: string;
}[];

export type SeachFilds = {
  id: string;
  name: string;
}[];

export type Button = {
  title: string;
  id: string;
  link?: string;
  func?: Function;
  disabled?: boolean;
};
export type Buttons = Button[];

export type FormCol = {
  id: string | number;
  Lable: string;
  [key: string]: string | number;
};
