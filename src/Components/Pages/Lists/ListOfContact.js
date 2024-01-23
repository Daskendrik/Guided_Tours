import { useEffect, useState } from 'react';
import ListApplet from '../../ListApplets/ListApplet';
import ErrorServer from '../../Additional/ErrorServer';
import Loading from '../../Additional/Loading';
import ModalSeach from '../../ModalWin/ModalSeach';
import ModalDelete from '../../ModalWin/ModalDelete';
import $ from 'jquery';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const ListOfContact = () => {
  const [textError, setTextError] = useState(''); //ошибка
  const [isLoading, setIsLoading] = useState(true); //прогрузка данных
  const [dataList, setDataList] = useState([]); //данные из бд
  const [targetRow, setTargetRow] = useState('Запись не выбрана'); //выбранная запись
  const [search, setSearch] = useState('');
  const [targetFio, setTargetFio] = useState('');
  const seachFilds = [
    { id: 'Surname', name: 'Фамилия' },
    { id: 'Phone', name: 'Телефон' },
  ];
  const buttons = [
    {
      title: 'Создать новый',
      func: function handleCreateTC() {
        console.log('Заглушка');
      },
      id: uuidv4(),
      link: '/contact/new',
    },
    {
      title: 'Найти',
      func: function handleFindContact() {
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
    {
      title: 'Удалить',
      func: function handleDeleteContact() {
        deleteContact();
      },
      id: uuidv4(),
    },
  ];

  const clearSeach = () => {
    setSearch('');
  };

  const findContact = () => {
    $('#Phone').val('');
    $('#Surname').val('');
    window.location.href = '#openModalSeach';
  };

  const deleteContact = () => {
    window.location.href = '#openModalDelete';
    console.log('УДаление');
  };

  const handleDeleteRow = async () => {
    axios
      .post('http://localhost:3001/api/contact/delete', { targetRow })
      .then((res) => {
        console.log('Контакт удален ');
        setTargetRow('');
        axios
          .get('http://localhost:3001/api/contact/getAll')
          .then((res) => {
            console.log(res.data.req);
            const dataIntegration = res.data.req;
            if (!!dataIntegration) {
              setDataList(dataIntegration);
            }
          })
          .catch((error) => {
            setTextError(error.message);
          });
      })
      .catch((error) => {
        setTextError(error.message);
      });
    window.location.href = '#close';
  };

  const handleSetTargetRow = (e) => {
    const newId = e.target.parentElement.id;
    setTargetRow(newId);
    const selectItem = dataList
      .find((data) => data.element === 'Body')
      .elements.find((elem) => elem[0] === +newId)[1];
    setTargetFio(selectItem);
  };

  const handleSetSeache = () => {
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
        console.log(targetRow);
        const res = await fetch(url);
        const dataIntegration = await res.json();
        if (!!dataIntegration) {
          setDataList(dataIntegration.req);
        }
      } catch (error) {
        setTextError(error.message);
      }
      setIsLoading(false);
    }
    fetchData();
  }, [search]);

  if (textError) {
    return <ErrorServer textError={textError} />;
  }
  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <ModalDelete
        name={targetFio}
        component="контакт"
        func={handleDeleteRow}
      />
      <ModalSeach
        arrcol={seachFilds}
        seach={handleSetSeache}
        title={'Поиск контакта'}
      />
      <ListApplet
        title="Контакты"
        arrListColum={dataList}
        buttons={buttons}
        changeTarget={handleSetTargetRow}
        targetRow={targetRow}
      />
    </>
  );
};

export default ListOfContact;
