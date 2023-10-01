import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { UIBtn } from '../../Data/museums';
import FormApplet from '../FormApplets/FormApplet';
import ListApplet from '../ListApplets/ListApplet';
import { useState } from 'react';

const Museum = () => {
  const [data, setData] = useState(null);
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

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          'https://my-json-server.typicode.com/Daskendrik/demo_data/db'
        );
        const museum = await res.json();
        setData(museum);
      } catch (error) {
        console.log(error);
      }
      console.log('finish');
    }
    fetchData();
  }, []);
  console.log(data);

  return (
    <>
      <FormApplet UIBtn={UIBtn} arrColum={arrColum} />
      <ListApplet />
    </>
  );
};

export default Museum;
