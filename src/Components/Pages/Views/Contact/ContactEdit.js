import { useEffect, useState } from 'react';
import FormApplet from '../../../FormApplets/FormApplet';
import { v4 as uuidv4 } from 'uuid';
import ErrorServer from '../../../Additional/ErrorServer';
import Loading from '../../../Additional/Loading';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ModalError from '../../../ModalWin/ModalError';
import ModalSave from '../../../ModalWin/ModalSave';

const ContactEdit = () => {
  const params = useParams();
  const targetRow = params.id;
  const [textError, setTextError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const isReadOnly = false;
  const [saveErr, setSaveError] = useState('Нет ошибки');
  const goBtn = ['/contact', `/contact/${targetRow}`];

  const buttons = [
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
  const [data, setData] = useState([]); //данные из бд

  const changeData = (id, text) => {
    let newdate;
    newdate = data.map((x) => (x.id === id ? { ...x, Value: text } : x));
    setData(newdate);
  };

  const handleCloserr = () => {
    window.location.href = '#close';
  };

  const saveData = async () => {
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

export default ContactEdit;
