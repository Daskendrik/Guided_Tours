import { useEffect, useState } from 'react';
import $ from 'jquery';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import ListApplet from '../../ListApplets/ListApplet.tsx';
import ErrorServer from '../../Additional/ErrorServer';
import Loading from '../../Additional/Loading';
import ModalSeach from '../../ModalWin/ModalSeach';
import ModalDelete from '../../ModalWin/ModalDelete';
import FormApplet from '../../FormApplets/FormApplet';

const ListOfTypeLOV = () => {
  const [textError, setTextError] = useState(''); //ошибка
  const [isLoading, setIsLoading] = useState(true); //прогрузка данных
  const [dataList, setDataList] = useState([]); //данные из бд
  const [targetRow, setTargetRow] = useState(''); //выбранная запись
  const [search, setSearch] = useState('');
  const [targetFio, setTargetFio] = useState('');
  const seachFilds = [
    { id: 'LOV_type', name: 'Тип лова' },
    { id: 'name', name: 'Отображаемое значение' },
  ];
  const [data, setData] = useState([]);
  const numOfRows = 10;
  const component = 'type_lov';
  const buttons = [
    {
      title: 'Создать новый',
      id: uuidv4(),
      link: `/${component}/new`,
    },
    {
      title: 'Найти',
      func: function handleFindLOV() {
        findLOV();
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
      func: function handleDeleteLOV() {
        deleteLOV();
      },
      id: uuidv4(),
    },
  ];

  const clearSeach = () => {
    setSearch('');
  };

  const findLOV = () => {
    $('#Phone').val('');
    $('#Surname').val('');
    window.location.href = '#openModalSeach';
  };

  const deleteLOV = () => {
    window.location.href = '#openModalDelete';
    console.log('УДаление');
  };

  const getTargetLov = () => {
    axios
      .get(`http://localhost:3001/api/${component}/getById`, { targetRow })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        setTextError(error.message);
      });
  };

  const handleDeleteRow = async () => {
    axios
      .post(`http://localhost:3001/api/${component}/delete`, { targetRow })
      .then((res) => {
        console.log('Контакт удален ');
        setTargetRow('');
        axios
          .get(`http://localhost:3001/api/${component}/getAll`)
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
    getTargetLov();
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
          const firstRow = dataIntegration.req.find(
            (data) => data.element === 'firstRow'
          ).elements;
          const firstRowId = firstRow.find((data) => data.id === 'id'); // без доп констант не работает
          const ID = firstRowId.Value;
          setTargetRow(ID);
          setData(firstRow);
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

  console.log(data);
  console.log(targetRow);
  if (textError) {
    return <ErrorServer textError={textError} />;
  }
  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <ModalDelete name={targetFio} component="LOV" func={handleDeleteRow} />
      <ModalSeach
        arrcol={seachFilds}
        seach={handleSetSeache}
        title={'Поиск LOV'}
      />
      <ListApplet
        title="Справочник"
        arrListColum={dataList}
        buttons={buttons}
        changeTarget={handleSetTargetRow}
        numOfRows
        blockSize={numOfRows}
        targetRow={targetRow}
      />
      <FormApplet title="Данные записи справочника" data={data} />
    </>
  );
};

export default ListOfTypeLOV;
