import { useEffect, useState } from 'react';
import FormApplet from '../../../FormApplets/FormApplet';
import { v4 as uuidv4 } from 'uuid';
import ErrorServer from '../../../Additional/ErrorServer';
import Loading from '../../../Additional/Loading';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ContactEdit = () => {
  const params = useParams();
  const id = params.id;
  const [textError, setTextError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const isReadOnly = false;
  const buttons = [
    {
      title: 'Сохранить',
      //   link: `/contact/#id=${id}`,
      id: uuidv4(),
    },
    {
      title: 'Отмена',
      id: uuidv4(),
      func: function handleCreateTC() {
        console.log('Отмена');
      },
    },
  ];
  const [data, setData] = useState([]); //данные из бд

  const changeData = (id, text) => {
    let newdate;
    newdate = data.map((x) => (x.id === id ? { ...x, Value: text } : x));
    setData(newdate);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const seach = `?ID=${id}`;
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
  }, [id]);

  if (textError) {
    return <ErrorServer textError={textError} />;
  }
  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <FormApplet
        title={`Контакт N${id}`}
        data={data}
        buttons={buttons}
        isReadOnly={isReadOnly}
        changeData={changeData}
      />
    </>
  );
};

export default ContactEdit;
