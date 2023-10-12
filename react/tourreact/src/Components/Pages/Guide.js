import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import FormApplet from '../FormApplets/FormApplet';

const Guide = (props) => {
  const { id } = props;
  const [mainFormData, setMainData] = useState([
    {
      Lable: 'ФИО',
      Velue: 'Заглушка',
      Type: 'text',
      id: uuidv4(),
    },
    {
      Lable: 'Город',
      Velue: 'Москва',
      Type: 'text',
      id: uuidv4(),
    },
    {
      Lable: 'Адрес',
      Velue: 'Москва, Коломенское',
      Type: 'textarea',
      id: uuidv4(),
    },
    {
      Lable: 'Телефон',
      Velue: '89264932179',
      Type: 'tel',
      id: uuidv4(),
    },
    {
      Lable: 'Паспорт',
      Velue: 'Тут много чего будет написано',
      Type: 'textarea',
      id: uuidv4(),
    },
    {
      Lable: 'Коментарий',
      Velue: 'Тут много чего будет написано',
      Type: 'textarea',
      id: uuidv4(),
    },
  ]);
  return (
    <>
      <FormApplet arrColum={mainFormData} title="Информация" />
    </>
  );
};

export default Guide;
