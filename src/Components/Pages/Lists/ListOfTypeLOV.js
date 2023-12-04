import { useEffect, useState } from 'react';
import ListApplet from '../../ListApplets/ListApplet';
import ErrorServer from '../../Additional/ErrorServer';
import Loading from '../../Additional/Loading';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import FormAppletEdit from '../../FormApplets/FormAppletEdit';

const ListOfTypeLOV = () => {
  const [textError, setTextError] = useState(''); //ошибка
  const [isLoading, setIsLoading] = useState(true); //прогрузка данных
  const [dataList, setDataList] = useState([]); //данные из бд
  const [targetRow, setTargetRow] = useState(''); //выбранная запись
  const [isEdit, setIsEdit] = useState(false);
  const buttons = [
    {
      title: 'Создать новую запись',
      func: function handleCreateTC() {
        console.log('Заглушка');
      },
      id: uuidv4(),
    },
    {
      title: 'Удалить запись',
      func: function handleCreateTC() {
        console.log('Заглушка');
      },
      id: uuidv4(),
    },
    {
      title: 'Редактировать',
      func: function handleEdit() {
        console.log('Заглушка');
      },
      id: uuidv4(),
    },
    {
      title: 'Сохранить',
      func: function handleCreateTC() {
        console.log('Заглушка');
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
        const res = await fetch('http://localhost:3001/api/type_lov/get');
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
    <>
      <ListApplet
        title="Список всех ТС"
        arrListColum={dataList}
        buttons={buttons}
        changeTarget={handleSetTargetRow}
      />
    </>
  );
};

export default ListOfTypeLOV;
