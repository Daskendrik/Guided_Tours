import { useState } from 'react';
import FormApplet from '../FormApplets/FormApplet';
import ListApplet from '../ListApplets/ListApplet';
import { v4 as uuidv4 } from 'uuid';

const Restaurant = () => {
  const [arrColum, setArrColum] = useState([
    {
      Lable: 'Название',
      Velue: 'Заглушка',
      Type: 'text',
      id: uuidv4(),
    },
    {
      Lable: 'Город',
      Velue: 'Заглушка',
      Type: 'text',
      id: uuidv4(),
    },
    {
      Lable: 'Адрес',
      Velue: 'Заглушка',
      Type: 'textarea',
      id: uuidv4(),
    },
    {
      Lable: 'Сайт',
      Velue: 'Заглушка',
      Type: 'text',
      id: uuidv4(),
    },
    {
      Lable: 'Телефон',
      Velue: 'Заглушка',
      Type: 'tel',
      id: uuidv4(),
    },
    {
      Lable: 'Коментарий',
      Velue: 'Тут много чего будет написано',
      Type: 'textarea',
      id: uuidv4(),
    },
    {
      Lable: 'Почта',
      Velue: 'Заглушка',
      Type: 'email',
      id: uuidv4(),
    },
  ]);

  return (
    <>
      <FormApplet arrColum={arrColum} title="Информация" />
      <ListApplet />
    </>
  );
};

export default Restaurant;
