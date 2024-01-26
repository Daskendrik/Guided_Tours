import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ModalError from '../../../ModalWin/ModalError';
import ModalSave from '../../../ModalWin/ModalSave';
import FormApplet from '../../../FormApplets/FormApplet';
import ErrorServer from '../../../Additional/ErrorServer';
import Loading from '../../../Additional/Loading';

const Edit = () => {
  const params = useParams();
  const targetRow = params.id; // получаем текущий айдишник
  const [textError, setTextError] = useState(''); // экран ошибки
  const [isLoading, setIsLoading] = useState(true); // экран загрузки
  const isReadOnly = false; // РО
  const [saveErr, setSaveError] = useState('Нет ошибки'); // Ошибка при сохранении
  const goBtn = ['/contact', `/contact/${targetRow}`]; // кнопки для апплета удачного сохранения
  const buttons = [
    //Кнопки на апплет
    {
      title: 'Сохранить',
      id: uuidv4(),
      func: function handleSaveData() {
        saveData();
      },
    },
    {
      title: 'Отмена',
      id: uuidv4(),
      link: `/contact`,
    },
  ];
  const [data, setData] = useState([]); //Данные из бд

  const changeData = (id, text) => {
    // Изменение данных при вводе (контролируемое изменение)
    let newdate;
    newdate = data.map((x) => (x.id === id ? { ...x, Value: text } : x));
    setData(newdate);
  };

  const handleCloserr = () => {
    //функция закрытия окна ошибки
    window.location.href = '#close';
  };

  const saveData = async () => {
    //сохранение данных по кнопке
    data.push({ id: 'id', Value: targetRow });
    axios
      .post('http://localhost:3001/api/contact/update', data)
      .then((res) => {
        if (res.data.status === 'OK') {
          console.log('Контакт сохранен');
          window.location.href = '#openModalSave';
        } else {
          window.location.href = '#openModalError';
          setSaveError(res.data.text);
        }
        console.log(res);
      })
      .catch((error) => {
        setTextError(error.message);
      });
  };

  useEffect(() => {
    // интеграция, выгрузка данных
    async function fetchData() {
      try {
        const seach = `?ID=${targetRow}`;
        const url = `http://localhost:3001/api/contact/getById/${seach}`;

        const res = await fetch(url);
        const dataIntegration = await res.json();
        if (!!dataIntegration) {
          console.log(dataIntegration);
          setData(dataIntegration.req);
        }
      } catch (error) {
        setTextError(error.message);
      }
      setIsLoading(false);
    }
    fetchData();
  }, [targetRow]);

  if (textError) {
    return <ErrorServer textError={textError} />;
  }
  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <ModalSave
        text={`Контакт №${targetRow} успешно сохранен`}
        goBtn={goBtn}
      />
      <ModalError func={handleCloserr} doing="удаление" err={saveErr} />
      <FormApplet
        title={`Контакт N${targetRow}`}
        data={data}
        buttons={buttons}
        isReadOnly={isReadOnly}
        changeData={changeData}
      />
    </>
  );
};

export default Edit;
