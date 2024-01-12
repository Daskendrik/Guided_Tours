import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import FormApplet from '../../../FormApplets/FormApplet';
import ErrorServer from '../../../Additional/ErrorServer';
import Loading from '../../../Additional/Loading';

const ContactNew = () => {
  const [textError, setTextError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const changeData = (id, text) => {
    let newdate = data.map((x) => (x.id === id ? { ...x, Value: text } : x));
    setData(newdate);
  };

  const changeID = (text) => {
    let newdate = data.map((x) => (x.id === 'id' ? { ...x, Value: text } : x));
    setNewId(text);
    setData(newdate);
  };

  const [newId, setNewId] = useState('000');
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
      Type: 'text',
      id: 'type_code',
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
  const isReadOnly = false;
  const buttons = [
    {
      title: 'Сохранить',
      func: function handleCreateTC() {
        console.log('Заглушка');
        safeData();
      },
      id: uuidv4(),
    },
    {
      title: 'Отмена',
      func: function handleCreateTC() {
        console.log('Заглушка');
      },
      id: uuidv4(),
    },
  ];
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('http://localhost:3001/api/contact/getLast');
        const dataIntegration = await res.json();
        console.log(dataIntegration);
        if (!!dataIntegration) {
          const text = dataIntegration.req + 1;
          changeID(text);
        }
      } catch (error) {
        setTextError(error.message);
      }
      setIsLoading(false);
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const safeData = async () => {
    console.log('tick');
    axios
      .post('http://localhost:3001/api/contact/create', data)
      .then((res) => {
        console.log('Контакт сохранен');
      })
      .catch((error) => {
        setTextError(error.message);
      });
  };

  if (textError) {
    return <ErrorServer textError={textError} />;
  }
  console.log(isLoading);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
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

export default ContactNew;
