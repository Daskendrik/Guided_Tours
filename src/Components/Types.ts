//Сущности
export type Contact = {};
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
