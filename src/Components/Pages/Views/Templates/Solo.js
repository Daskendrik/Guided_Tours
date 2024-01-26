import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ModalDelete from '../../../ModalWin/ModalDelete';
import FormApplet from '../../../FormApplets/FormApplet';
import ErrorServer from '../../../Additional/ErrorServer';
import Loading from '../../../Additional/Loading';

const Contact = () => {
  const params = useParams();
  const targetRow = params.id; // получаем текущий айдишник
  const [textError, setTextError] = useState(''); // экран ошибки
  const [isLoading, setIsLoading] = useState(true); // экран загрузки
  const isReadOnly = true; // РО
  const buttons = [
    //Кнопки на апплет
    {
      title: 'Редактировать',
      func: function handleCreateTC() {
        console.log('Заглушка редактировать');
      },
      id: uuidv4(),
      link: `/contact/edit/${targetRow}`,
    },
    {
      title: 'Удалить',
      id: uuidv4(),
      func: function handleCreateTC() {
        deleteContact();
      },
    },
  ];
  const [data, setData] = useState([]); //данные из бд

  const deleteContact = () => {
    //открывает окно удаления контакта
    window.location.href = '#openModalDelete';
  };

  const handleDeleteRow = async () => {
    //удаление записи
    axios
      .post('http://localhost:3001/api/contact/delete', { targetRow })
      .then((res) => {
        console.log('Контакт удален ');
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
      <ModalDelete
        name="текущий контакт"
        component="контакт"
        func={handleDeleteRow}
      />
      <FormApplet
        title={`Контакт N${targetRow}`}
        data={data}
        buttons={buttons}
        isReadOnly={isReadOnly}
      />
    </>
  );
};

export default Contact;
