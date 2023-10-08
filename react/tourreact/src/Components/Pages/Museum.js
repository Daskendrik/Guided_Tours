import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { UIBtn } from '../../Data/museums';
import FormApplet from '../FormApplets/FormApplet';
import ListApplet from '../ListApplets/ListApplet';
import { useState } from 'react';

const Museum = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [arrColum, setArrColum] = useState([
    {
      Lable: 'Название',
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
      Lable: 'Стоимость',
      Velue: 'Тут много чего будет написано',
      Type: 'textarea',
      id: uuidv4(),
    },
    {
      Lable: 'Выходной',
      Velue: 'СБ,ВСК',
      Type: 'text',
      id: uuidv4(),
    },
    {
      Lable: 'Коментарий',
      Velue: 'Тут много чего будет написано',
      Type: 'textarea',
      id: uuidv4(),
    },
  ]);
  const [arrListColum, setListColum] = useState([
    {
      element: 'Header',
      nameColumn: [
        { title: 'Номер тура', id: 'number' },
        { title: 'Название тура', id: 'name' },
        { title: 'Дата посещения', id: 'date' },
        { title: 'Размер группы', id: 'members' },
      ],
    },
    {
      element: 'Body',
      elements: [
        ['1234', '123', '123', '10'],
        ['12345', '123', '123', '10'],
        ['123567', '123', '123', '10'],
      ],
    },
  ]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          'https://my-json-server.typicode.com/Daskendrik/demo_data/db'
        );
        const museum = await res.json();
        console.log(museum);
        setArrColum(museum.museums[0].Colums);
      } catch (error) {
        console.log(error);
      }
      console.log('finish');
      setIsLoading(false);
    }
    fetchData();
  }, []);

  if (isLoading) {
    return <>Loading...</>;
  }

  return (
    <>
      <FormApplet UIBtn={UIBtn} arrColum={arrColum} title="Информация" />
      <ListApplet
        arrListColum={arrListColum}
        title="Ближайшее посещение групп"
      />
    </>
  );
};

export default Museum;
