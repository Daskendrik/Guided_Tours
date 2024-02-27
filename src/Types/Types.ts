//Стандартные поля
export type FieldApplet = {
  lable: string;
  value: any;
  type: string;
  id: string;
  required?: boolean;
  readonly?: boolean;
  change?: any;
  arrSelect?: string[];
  codeSelect?: string;
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
  doing: string;
  func?: any;
  err: string;
  column?: string[];
  funcClose: any;
};
export type SaveModal = {
  text: string;
  goBtn: string[];
  open: boolean;
  funcClose: any;
};
