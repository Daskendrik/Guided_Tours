//Сущности
export type Contact = {};
//Несущности
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

type Botton = {
  title: string;
  id: string;
  link?: string;
  func?: Function;
  disabled?: boolean;
};
export type Bottons = Botton[];
