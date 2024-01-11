import { useState } from 'react';
import FormApplet from '../../FormApplets/FormApplet';
import { v4 as uuidv4 } from 'uuid';

const ContactNew = () => {
  const changeData = (id, text) => {
    let newdate = data.map((x) => (x.id === id ? { ...x, Value: text } : x));
    console.log(newdate);
    setData(newdate);
  };
  const [data, setData] = useState([
    {
      Lable: 'Фамилия*',
      Value: '',
      Type: 'text',
      id: 'lastName',
    },
    {
      Lable: 'Имя*',
      Value: '',
      Type: 'text',
      id: 'firstName',
    },
    {
      Lable: 'Отчество',
      Value: '',
      Type: 'text',
      id: 'patronymic',
    },
    {
      Lable: 'Телефон',
      Value: '',
      Type: 'tel',
      id: 'tel',
    },
    {
      Lable: 'Тип контакта*',
      Value: '',
      Type: 'text',
      id: 'type',
    },
    {
      Lable: 'Почта',
      Value: '',
      Type: 'email',
      id: 'email',
    },
    {
      Lable: 'Компания',
      Value: '',
      Type: 'text',
      id: 'work',
    },
    {
      Lable: 'Комментарий',
      Value: '',
      Type: 'textarea',
      id: 'comment',
    },
  ]);
  const isReadOnly = false;
  const buttons = [
    {
      title: 'Сохранить',
      func: function handleCreateTC() {
        console.log('Заглушка');
      },
      id: uuidv4(),
    },
    {
      title: 'Отмена',
      func: function handleCreateTC() {
        console.log('Заглушка');
      },
      id: uuidv4(),
    },
  ];
  return (
    <>
      <FormApplet
        title="Контакт"
        data={data}
        buttons={buttons}
        isReadOnly={isReadOnly}
        changeData={changeData}
      />
    </>
  );
};

export default ContactNew;
