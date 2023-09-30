// Формирование данных для страницы музея
import { v4 as uuidv4 } from 'uuid';

function NewColumnData(nameColumn, name, type) {
  this.nameColumn = nameColumn;
  this.name = name;
  this.type = type;
  this.id = uuidv4();
}

const UIForm = [
  'Название',
  'Город',
  'Адрес',
  'Телефон',
  'Стоимость',
  'Выходной',
  'Коментарий',
];

// const UIFormData = [
//   { Name: 'Коломенское', type: 'text' },
//   { City: 'Москва', type: 'text' },
//   { Adress: 'Адрес', type: 'textarea' },
//   { Phone: 'Телефон', type: 'tel' },
//   { Cost: 'Стоимость', type: 'textarea' },
//   { Weekend: 'Выходной', type: 'text' },
//   { Comments: 'Коментарий', type: 'textarea' },
// ];

export { UIForm };
