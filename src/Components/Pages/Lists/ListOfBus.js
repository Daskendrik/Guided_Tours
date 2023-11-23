import { useEffect, useState } from 'react';
import ListApplet from '../../ListApplets/ListApplet';

const ListOfBus = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [dataList, setDataList] = useState([
    {
      element: 'Header',
      nameColumn: [
        { title: 'Номер ТС', id: 'numTC' },
        { title: 'Фирма', id: 'firm' },
        { title: 'Телефон фирмы', id: 'firmTel' },
      ],
    },
    {
      element: 'Body',
      elements: [['Loading...', 'Loading...', 'Loading...']],
    },
  ]);

  console.log('123');
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('http://localhost:3001/api/buses/getAllbus');
        const dataIntegration = await res.json();
        console.log(dataIntegration);
        if (!!dataIntegration) {
          setDataList(dataIntegration.list);
          console.log(dataIntegration.list);
        } else {
          return <>Ошибка...</>;
        }
      } catch (error) {
        console.log(error);
        alert('Ошибка, отвалился бек');
      }
      console.log('finish');
    }
    fetchData();
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <>Loading...</>;
  }

  return <ListApplet title="Список всех ТС" arrListColum={dataList} />;
};

export default ListOfBus;
