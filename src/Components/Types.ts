//Сущности
export type Contact = {
  id: FieldApplet;
  last_name: FieldApplet;
  first_name: FieldApplet;
  middle_name?: FieldApplet;
  tel?: FieldApplet;
  email?: FieldApplet;
  type_code?: string[];
  comment?: FieldApplet;
  created: FieldApplet;
  update: FieldApplet;
};

//Стандартные поля
export type FieldApplet = {
  Lable: string;
  Value: any;
  Type: string;
  id: string;
  required?: boolean;
  readonly?: boolean;
  change?: any;
  arrSelect?: string[];
};

export type FieldsApplet = FieldApplet[];

//Поля для поиска
export type SeachFild = {
  id: string;
  name: string;
};

export type SeachFilds = SeachFild[];

//КНопки
export type Button = {
  title: string;
  id: string;
  link?: string;
  func?: Function;
  disabled?: boolean;
};
export type Buttons = Button[];

//Модальные окна
export type DeleteModal = {
  target: string;
  component: string;
  open: boolean;
  func: any;
  funcClose: any;
};
export type SeachModal = {
  title: string;
  arrcol: SeachFilds;
  seach: any;
  open: boolean;
  funcClose: any;
};
export type ErrorModal = {
  open: boolean;
  title: string;
  doing: string;
  func: any;
  err: string;
  column?: string[];
};
export type SaveModal = {
  text: string;
  goBtn: string[];
  open: boolean;
};
