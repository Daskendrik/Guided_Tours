import { useEffect, useState } from 'react';
import ListApplet from '../../ListApplets/ListApplet.tsx';
import ErrorServer from '../../Additional/ErrorServer';
import Loading from '../../Additional/Loading';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

const ListOfCompanyBus = () => {
  const [textError, setTextError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [dataList, setDataList] = useState([]);
  const [targetRow, setTargetRow] = useState('');
  const buttons = [
    {
      title: 'Создать новую запись',
      func: function handleCreateTC() {
        console.log('Заглущка');
      },
      id: uuidv4(),
    },
    {
      title: 'Удалить запись',
      func: function handleCreateTC() {
        console.log('Заглущка');
      },
      id: uuidv4(),
    },
  ];
  const handleSetTargetRow = (e) => {
    setTargetRow(e.target.parentElement.id);
    console.log(targetRow);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          'http://localhost:3001/api/company_bus/getAllCompanyBus'
        );
        const dataIntegration = await res.json();
        console.log(dataIntegration);
        if (!!dataIntegration) {
          setDataList(dataIntegration.req);
          console.log(dataIntegration.req);
        }
      } catch (error) {
        console.log(error);
        setTextError(error.message);
      }
      console.log('finish');
      setIsLoading(false);
    }
    fetchData();
  }, []);

  if (textError) {
    return <ErrorServer textError={textError} />;
  }
  console.log(isLoading);
  if (isLoading) {
    return <Loading />;
  }

  return (
    <ListApplet
      title="Список всех транспортных фирм"
      arrListColum={dataList}
      buttons={buttons}
      changeTarget={handleSetTargetRow}
    />
  );
};

export default ListOfCompanyBus;
