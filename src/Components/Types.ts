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
  Id: string;
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
