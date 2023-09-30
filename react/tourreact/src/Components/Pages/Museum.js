import { useEffect } from 'react';
import { UIBtn, UIForm } from '../../Data/museums';
import FormApplet from '../FormApplets/FormApplet';
import ListApplet from '../ListApplets/ListApplet';
import { useState } from 'react';

const Museum = () => {
  const [data, setData] = useState(null);
  const [numCol, setNumCol] = useState(2);
  const [arrColum, setArrColum] = useState([
    {
      Lable: 'Название',
      Velue: 'Коломенское',
      Type: 'text',
    },
    {
      Lable: 'Город',
      Velue: 'Москва',
      Type: 'text',
    },
    {
      Lable: 'Адрес',
      Velue: 'Москва, Коломенское',
      Type: 'textarea',
    },
    {
      Lable: 'Телефон',
      Velue: '89264932179',
      Type: 'tel',
    },
    {
      Lable: 'Стоимость',
      Velue: 'Тут много чего будет написано',
      Type: 'textarea',
    },
    {
      Lable: 'Выходной',
      Velue: 'СБ,ВСК',
      Type: 'text',
    },
    {
      Lable: 'Коментарий',
      Velue: 'Тут много чего будет написано',
      Type: 'textarea',
    },
  ]);
  useEffect(() => {
    fetch('https://my-json-server.typicode.com/Daskendrik/demo_data/db')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.log(error))
      .finally(() => console.log('Данные загруженны'));
  }, []);

  console.log(data);
  // if (data && arrColum === '' && numCol === '') {
  //   const museum = data.museums[0];
  //   console.log(museum);
  //   setNumCol(museum.Colums.length);
  //   console.log(numCol);
  //   setArrColum(museum.Colums);
  //   console.log(arrColum);
  // } else {

  // }

  return (
    <>
      <FormApplet
        UIForm={UIForm}
        UIBtn={UIBtn}
        numCol={numCol}
        arrColum={arrColum}
      />
      <ListApplet />
    </>
  );
};

export default Museum;
