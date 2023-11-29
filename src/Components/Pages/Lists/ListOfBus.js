import { useEffect, useState } from 'react';
import ListApplet from '../../ListApplets/ListApplet';
import ErrorServer from '../../Additional/ErrorServer';
import Loading from '../../Additional/Loading';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

const ListOfBus = () => {
  const [textError, setTextError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [dataList, setDataList] = useState([]);
  const [targetRow, setTargetRow] = useState('');
  const buttons = [
    {
      title: 'Создать новую запись',
      func: function handleCreateTC() {
        CreateTC();
      },
      id: uuidv4(),
    },
    {
      title: 'Удалить запись',
      func: function handleCreateTC() {
        DeleteTC();
      },
      id: uuidv4(),
    },
  ];

  const CreateTC = () => {
    const data = { login: 'Dasha', data: '01/01/2023' };
    axios
      .put('http://localhost:3001/api/buses/createBus', {
        body: JSON.stringify(data),
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
        setTextError(error.message);
      });
  };

  const DeleteTC = () => {
    axios
      .delete('http://localhost:3001/api/buses/deleteBus', {
        params: { targetRow },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
        setTextError(error.message);
      });
  };

  const handleSetTargetRow = (e) => {
    setTargetRow(e.target.parentElement.id);
    console.log(targetRow);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('http://localhost:3001/api/buses/getAllbus');
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
      title="Список всех ТС"
      arrListColum={dataList}
      buttons={buttons}
      changeTarget={handleSetTargetRow}
    />
  );
};

export default ListOfBus;
