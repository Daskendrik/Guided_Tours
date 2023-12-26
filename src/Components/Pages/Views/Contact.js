import { useState } from 'react';
import FormApplet from '../../FormApplets/FormApplet';
import { v4 as uuidv4 } from 'uuid';

const Contact = () => {
  const data = [
    {
      Lable: 'Фамилия*',
      Velue: '',
      Type: 'text',
      id: 'lastName',
    },
    {
      Lable: 'Имя*',
      Velue: '',
      Type: 'text',
      id: 'firstName',
    },
    {
      Lable: 'Отчество',
      Velue: '',
      Type: 'text',
      id: 'patronymic',
    },
    {
      Lable: 'Телефон',
      Velue: '',
      Type: 'tel',
      id: 'tel',
    },
    {
      Lable: 'Тип контакта*',
      Velue: '',
      Type: 'text',
      id: 'type',
    },
    {
      Lable: 'Почта',
      Velue: '',
      Type: 'email',
      id: 'email',
    },
    {
      Lable: 'Компания',
      Velue: '',
      Type: 'text',
      id: 'work',
    },
  ];
  const buttons = [
    {
      title: 'Сохранить',
      func: function handleCreateTC() {
        console.log('Заглушка');
      },
      id: uuidv4(),
    },
    {
      title: 'Редактировать',
      func: function handleCreateTC() {
        console.log('Заглушка');
      },
      id: uuidv4(),
    },
  ];
  const [isReadOnly, setIsReadOnly] = useState(true);
  if (window.location.href.indexOf('new') > -1 && isReadOnly === true) {
    setIsReadOnly(false);
  }
  return (
    <>
      <FormApplet
        title="Контакт"
        data={data}
        buttons={buttons}
        isReadOnly={isReadOnly}
      />
    </>
  );
};

export default Contact;
