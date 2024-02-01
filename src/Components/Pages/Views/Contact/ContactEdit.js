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
  const [fio, setFIO] = useState('');

  const formulFIO = (data) => {
    const last_name = data.filter((a) => a.id === 'last_name')[0].Value;
    const first_name = data.filter((a) => a.id === 'first_name')[0].Value;
    const middle_name = data.filter((a) => a.id === 'middle_name')[0].Value;
    setFIO(`${last_name} ${first_name} ${middle_name}`);
  };

  // модальное с ошибкой
  const [isModErrOpen, setIsModErrOpen] = useState(false);
  const changeModErrOpen = () => {
    isModErrOpen ? setIsModErrOpen(false) : setIsModErrOpen(true);
  };

  //успешное сохранение
  const [isModSaveOpen, setIsModSaveOpen] = useState(false);
  const changeModSaveOpen = () => {
    isModSaveOpen ? setIsModSaveOpen(false) : setIsModSaveOpen(true);
  };

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

  const saveData = async () => {
    data.push({ id: 'id', Value: targetRow });
    axios
      .post('http://localhost:3001/api/contact/update', data)
      .then((res) => {
        if (res.data.status === 'OK') {
          changeModSaveOpen();
        } else {
          changeModErrOpen();
          setSaveError(res.data.text);
        }
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
          setData(dataIntegration.req);
          formulFIO(dataIntegration.req);
        }
      } catch (error) {
        setTextError(error.message);
      }
      setIsLoading(false);
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        open={isModSaveOpen}
      />
      <ModalError
        func={changeModErrOpen}
        doing="сохранениe"
        err={saveErr}
        open={isModErrOpen}
      />
      <FormApplet
        title={`Контакт N${targetRow} ${fio}`}
        data={data}
        buttons={buttons}
        isReadOnly={isReadOnly}
        changeData={changeData}
      />
    </>
  );
};

export default ContactEdit;
