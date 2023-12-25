import { useEffect, useState } from 'react';
import ListApplet from '../../ListApplets/ListApplet';
import ErrorServer from '../../Additional/ErrorServer';
import Loading from '../../Additional/Loading';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import ModalSeach from '../../Additional/ModalSeach';
import $ from 'jquery';

const ListOfContact = () => {
  const [textError, setTextError] = useState(''); //ошибка
  const [isLoading, setIsLoading] = useState(true); //прогрузка данных
  const [dataList, setDataList] = useState([]); //данные из бд
  const [targetRow, setTargetRow] = useState('11111'); //выбранная запись
  const [search, setSearch] = useState('');
  const seachFilds = [
    { id: 'Surname', name: 'Фамилия' },
    { id: 'Phone', name: 'Телефон' },
  ];
  const buttons = [
    {
      title: 'Создать новую запись',
      func: function handleCreateTC() {
        console.log('Заглушка');
      },
      id: uuidv4(),
    },
    {
      title: 'Найти',
      func: function handleCreateTC() {
        findContact();
      },
      id: uuidv4(),
    },
    {
      title: 'Очистить поиск',
      func: function handleClearSeach() {
        clearSeach();
      },
      id: uuidv4(),
    },
  ];

  const clearSeach = () => {
    setSearch('');
  };

  const findContact = () => {
    console.log('тык');
    $('#Phone').val('');
    $('#Surname').val('');
    window.location.href = '#openModal';
  };

  const handleSetTargetRow = (e) => {
    setTargetRow(e.target.parentElement.id);
    console.log(targetRow);
  };

  const handleSetSeache = () => {
    console.log('поиск');
    const phone = $('#Phone').val();
    const surname = $('#Surname').val();
    if (phone && surname) {
      setSearch(`?phone=${phone}&surname=${surname}`);
    } else if (phone) {
      setSearch(`?phone=${phone}`);
    } else if (surname) {
      setSearch(`?surname=${surname}`);
    } else {
      setSearch('');
    }
    window.location.href = '#close';
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const url = search
          ? `http://localhost:3001/api/contact/getAll/${search}`
          : 'http://localhost:3001/api/contact/getAll';
        console.log(url);
        const res = await fetch(url);
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
  }, [search]);

  if (textError) {
    return <ErrorServer textError={textError} />;
  }
  console.log(isLoading);
  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <ModalSeach arrcol={seachFilds} seach={handleSetSeache} />
      <ListApplet
        title="Контакты"
        arrListColum={dataList}
        buttons={buttons}
        changeTarget={handleSetTargetRow}
      />
    </>
  );
};

export default ListOfContact;
