import { useEffect, useState } from 'react';
import $ from 'jquery';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import ListApplet from '../../../ListApplets/ListApplet';
import ErrorServer from '../../../Additional/ErrorServer';
import Loading from '../../../Additional/Loading';
import ModalSeach from '../../../ModalWin/ModalSeach';
import ModalDelete from '../../../ModalWin/ModalDelete';

const ListOfContact = () => {
  const component = 'contact';
  const numOfRows = 10;
  const [textError, setTextError] = useState(); //ошибка
  const [isLoading, setIsLoading] = useState(true); //прогрузка данных
  const [dataList, setDataList] = useState([]); //данные из бд
  const [targetRow, setTargetRow] = useState(); //выбранная запись
  const [search, setSearch] = useState('');

  //настройки модальных окон
  const [isModDelOpen, setIsModDelOpen] = useState(false);
  const [targetFio, setTargetFio] = useState('');
  const seachFilds = [
    { id: 'Surname', name: 'Фамилия' },
    { id: 'Phone', name: 'Телефон' },
  ];

  const findContact = () => {
    $('#Phone').val('');
    $('#Surname').val('');
    window.location.href = '#openModalSeach';
  };

  const changeOpenDelModal = () => {
    isModDelOpen ? setIsModDelOpen(false) : setIsModDelOpen(true);
  };

  const handleChangeOpenDelModal = () => {
    changeOpenDelModal();
  };

  const buttons = [
    {
      title: 'Создать новый',
      id: uuidv4(),
      link: `/${component}/new`,
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
        changeOpenDelModal();
      },
      id: uuidv4(),
      disabled: targetRow ? false : true,
    },
  ];

  const clearSeach = () => {
    setSearch('');
  };

  const handleDeleteRow = async () => {
    axios
      .post(`http://localhost:3001/api/${component}/delete`, { targetRow })
      .then((res) => {
        setTargetRow('');
        axios
          .get(`http://localhost:3001/api/${component}/getAll`)
          .then((res) => {
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
    setIsModDelOpen(false);
  };

  const handleSetTargetRow = (e) => {
    const newId = e.target.parentElement.id;
    setTargetRow(newId);
    if (!!newId) {
      let selectItem = dataList
        .find((data) => data.element === 'Body')
        .elements.find((elem) => elem[0] === +newId)[1];
      setTargetFio(selectItem);
    }
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
          ? `http://localhost:3001/api/${component}/getAll/${search}`
          : `http://localhost:3001/api/${component}/getAll`;
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        open={isModDelOpen}
        func={handleDeleteRow}
        funcClose={handleChangeOpenDelModal}
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
        blockSize={numOfRows}
      />
    </>
  );
};

export default ListOfContact;
