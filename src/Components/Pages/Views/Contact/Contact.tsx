import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ModalDelete from '../../../ModalWin/ModalDelete.tsx';
import FormApplet from '../../../FormApplets/FormApplet.tsx';
import ErrorServer from '../../../Additional/ErrorServer.js';
import Loading from '../../../Additional/Loading.js';
import React from 'react';
import { DeleteModal } from '../../../Types.ts';

const Contact = () => {
  const params = useParams();
  const targetRow = params.id;
  const [textError, setTextError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isModDelOpen, setIsModDelOpen] = useState(false);
  const isReadOnly = true;
  const [fio, setFIO] = useState('');

  const formulFIO = (data) => {
    const last_name = data.filter((a) => a.id === 'last_name')[0].Value;
    const first_name = data.filter((a) => a.id === 'first_name')[0].Value;
    const middle_name = data.filter((a) => a.id === 'middle_name')[0].Value;
    setFIO(`${last_name} ${first_name} ${middle_name}`);
  };

  const buttons = [
    {
      title: 'Редактировать',
      id: uuidv4(),
      link: `/contact/edit/${targetRow}`,
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

  const closeDeleteContact = () => {
    setIsModDelOpen(false);
  };

  const handleDeleteRow = async () => {
    axios
      .post('http://localhost:3001/api/contact/delete', { targetRow })
      .then((res) => {
        window.location.href = '/contact';
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
  }, [targetRow]);

  console.log(data);

  if (textError) {
    return <ErrorServer textError={textError} />;
  }
  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <ModalDelete settings={settingsModalDelete} />
      <FormApplet
        title={`Контакт N${targetRow} ${fio}`}
        data={data}
        buttons={buttons}
        isReadOnly={isReadOnly}
      />
    </>
  );
};

export default Contact;
