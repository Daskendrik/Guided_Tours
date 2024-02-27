import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import FormApplet from '../../../FormApplets/FormApplet.tsx';
import ErrorServer from '../../../Additional/ErrorServer.js';
import Loading from '../../../Additional/Loading.js';
import ModalSave from '../../../ModalWin/ModalSave.tsx';
import ModalError from '../../../ModalWin/ModalError.tsx';
import React from 'react';
import { ErrorModal, SaveModal } from '../../../../Types/Types.ts';

const OldNew = () => {
  const [textError, setTextError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const isReadOnly = false;
  const [newId, setNewId] = useState('000');
  const [saveErr, setSaveError] = useState('Нет ошибки');
  const [isModErrOpen, setIsModErrOpen] = useState(false);

  const [data, setData] = useState([
    {
      Lable: 'Id',
      Value: '',
      Type: 'text',
      id: 'id',
    },
    {
      Lable: 'Фамилия*',
      Value: '',
      Type: 'text',
      id: 'last_name',
    },
    {
      Lable: 'Имя*',
      Value: '',
      Type: 'text',
      id: 'first_name',
    },
    {
      Lable: 'Отчество',
      Value: '',
      Type: 'text',
      id: 'middle_name',
    },
    {
      Lable: 'Телефон',
      Value: '',
      Type: 'tel',
      id: 'tel',
    },
    {
      Lable: 'Тип контакта*',
      Value: '',
      Type: 'select',
      id: 'type_code',
      arrSelect: [],
    },
    {
      Lable: 'Почта',
      Value: '',
      Type: 'email',
      id: 'email',
    },
    {
      Lable: 'Комментарий',
      Value: '',
      Type: 'textarea',
      id: 'comment',
    },
  ]);
  // модальное с ошибкой
  const settingsModalError: ErrorModal = {
    doing: 'сохранениe',
    open: isModErrOpen,
    err: saveErr,
    funcClose: () => {
      isModErrOpen ? setIsModErrOpen(false) : setIsModErrOpen(true);
    },
  };

  const changeModErrOpen = () => {
    isModErrOpen ? setIsModErrOpen(false) : setIsModErrOpen(true);
  };

  //успешное сохранение
  const [isModSaveOpen, setIsModSaveOpen] = useState(false);
  const changeModSaveOpen = () => {
    isModSaveOpen ? setIsModSaveOpen(false) : setIsModSaveOpen(true);
  };
  const settingsModalSave: SaveModal = {
    goBtn: ['/contact'],
    open: isModSaveOpen,
    text: `Контакт №${newId} успешно сохранен`,
    funcClose: () => {
      changeModSaveOpen();
    },
  };

  const buttons = [
    {
      title: 'Сохранить',
      func: function handleSaveData() {
        saveData();
      },
      id: uuidv4(),
    },
    {
      title: 'Отмена',
      id: uuidv4(),
      link: '/contact',
    },
  ];

  const changeData = (id, text) => {
    let newdate;
    newdate = data.map((x) => (x.id === id ? { ...x, Value: text } : x));
    setData(newdate);
  };

  const changeDataFromInegration = (text, lov) => {
    let newdate = data.map((x) => (x.id === 'id' ? { ...x, Value: text } : x));
    newdate = newdate.map((x) =>
      x.id === 'type_code' ? { ...x, arrSelect: lov } : x
    );
    setNewId(text);
    setData(newdate);
  };

  const saveData = async () => {
    axios
      .post('http://localhost:3001/api/contact/create', data)
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
  const goBtn = ['/contact', `/contact/${newId}`];
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('http://localhost:3001/api/contact/getLast');
        const dataIntegration = await res.json();
        if (!!dataIntegration) {
          const text = dataIntegration.req[0] + 1;
          const lov = dataIntegration.req[1];
          changeDataFromInegration(text, lov);
        }
      } catch (error) {
        setTextError(error.message);
      }
      setIsLoading(false);
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (textError) {
    return <ErrorServer textError={textError} />;
  }
  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <ModalSave settings={settingsModalSave} />
      <ModalError settings={settingsModalError} />
      <FormApplet
        title={`Новый контакт №${newId}`}
        data={data}
        buttons={buttons}
        isReadOnly={isReadOnly}
        changeData={changeData}
      />
    </>
  );
};

export default OldNew;
