import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ModalDelete from '../../../ModalWin/ModalDelete.tsx';
import FormApplet from '../../../FormApplets/FormApplet.tsx';
import ErrorServer from '../../../Additional/ErrorServer.js';
import Loading from '../../../Additional/Loading.js';
import React from 'react';
import { Buttons, DeleteModal, ErrorModal, SaveModal } from '../../../Types.ts';
import ModalSave from '../../../ModalWin/ModalSave.tsx';
import ModalError from '../../../ModalWin/ModalError.tsx';

const Contact = () => {
  const params = useParams();
  const targetRow = params.id;
  const [textError, setTextError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isModDelOpen, setIsModDelOpen] = useState(false);
  const [isReadOnly, setIsReadOnly] = useState(true);
  const [fio, setFIO] = useState('');
  const [saveErr, setSaveError] = useState('Нет ошибки');
  const [isModErrOpen, setIsModErrOpen] = useState(false);

  const formulFIO = (data) => {
    const last_name = data.filter((a) => a.id === 'last_name')[0].Value;
    const first_name = data.filter((a) => a.id === 'first_name')[0].Value;
    const middle_name = data.filter((a) => a.id === 'middle_name')[0].Value;
    setFIO(`${last_name} ${first_name} ${middle_name}`);
  };

  const settingsModalError: ErrorModal = {
    doing: 'сохранениe',
    open: isModErrOpen,
    err: saveErr,
    funcClose: () => {
      isModErrOpen ? setIsModErrOpen(false) : setIsModErrOpen(true);
    },
  };

  const changeModSaveOpen = () => {
    isModSaveOpen ? setIsModSaveOpen(false) : setIsModSaveOpen(true);
  };

  const changeModErrOpen = () => {
    isModErrOpen ? setIsModErrOpen(false) : setIsModErrOpen(true);
  };

  const changeData = (id, text) => {
    let newdate;
    console.log(data);
    newdate = data.map((x) => (x.id === id ? { ...x, Value: text } : x));
    setData(newdate);
  };
  const buttons: Buttons = [
    {
      title: 'Редактировать',
      id: uuidv4(),
      func: () => {
        setIsReadOnly(false);
      },
      disabled: !isReadOnly,
    },
    {
      title: 'Сохранить',
      id: uuidv4(),
      func: async () => {
        console.log(data);
        if (data.filter((el) => el.id === 'id').length === 0) {
          data.push({ id: 'id', Value: targetRow });
        }

        axios
          .post('http://localhost:3001/api/contact/update', data)
          .then((res) => {
            if (res.data.status === 'OK') {
              changeModSaveOpen();
            } else {
              setSaveError(res.data.text);
              changeModErrOpen();
            }
          })
          .catch((error) => {
            setTextError(error.message);
          });
      },
      disabled: isReadOnly,
    },
    {
      title: 'Удалить',
      id: uuidv4(),
      func: function handleCreateTC() {
        openDeleteContact();
      },
    },
  ];
  const [data, setData] = useState([]); //данные из бд

  const [isModSaveOpen, setIsModSaveOpen] = useState(false);
  const settingsModalSave: SaveModal = {
    goBtn: ['/contact'],
    open: isModSaveOpen,
    text: `Контакт №${targetRow} успешно сохранен`,
    funcClose: () => {
      setIsReadOnly(true);
      changeModSaveOpen();
    },
  };

  const openDeleteContact = () => {
    setIsModDelOpen(true);
  };
  const settingsModalDelete: DeleteModal = {
    target: fio,
    component: 'контакт',
    open: isModDelOpen,
    funcClose: () => {
      isModDelOpen ? setIsModDelOpen(false) : setIsModDelOpen(true);
    },
    func: async () => {
      axios
        .post('http://localhost:3001/api/contact/delete', { targetRow })
        .then((res) => {
          window.location.href = '/contact';
        })
        .catch((error) => {
          setTextError(error.message);
        });
    },
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
          formulFIO(dataIntegration.req);
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
      <ModalSave settings={settingsModalSave} />
      <ModalDelete settings={settingsModalDelete} />
      <ModalError settings={settingsModalError} />
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

export default Contact;
