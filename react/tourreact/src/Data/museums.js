// Формирование данных для страницы музея
import { v4 as uuidv4 } from 'uuid';

const UIForm = [
  'Название',
  'Город',
  'Адрес',
  'Телефон',
  'Стоимость',
  'Выходной',
  'Коментарий',
];

const UIBtn = [
  { title: 'Изменить', function: '', id: uuidv4() },
  { title: 'Сохранить', function: '', id: uuidv4() },
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

export { UIForm, UIBtn };
