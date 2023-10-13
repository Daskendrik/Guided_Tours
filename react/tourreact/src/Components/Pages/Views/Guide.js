import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import FormApplet from '../../FormApplets/FormApplet';

const Guide = (props) => {
  //Формирование и изменение первого апплета
  const [nameInfo, setNameInfo] = useState('Test');
  const [cityInfo, setCityInfo] = useState('Test');
  const [adressInfo, setAdressInfo] = useState('Test');
  const [telInfo, setTelInfo] = useState('Test');
  const [documentInfo, setDocumentInfo] = useState('Test');
  const [commetInfo, setCommetInfo] = useState('Test');
  let data = [];

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          'https://my-json-server.typicode.com/Daskendrik/demo_data/db'
        );
        const dataIntegration = await res.json();
        console.log(dataIntegration);
        if (!!dataIntegration) {
          setNameInfo(dataIntegration.nameInfo);
          setCityInfo(dataIntegration.cityInfo);
          setAdressInfo(dataIntegration.adressInfo);
          setTelInfo(dataIntegration.telInfo);
          setDocumentInfo(dataIntegration.documentInfo);
          setCommetInfo(dataIntegration.nameInfo);
        }
      } catch (error) {
        console.log(error);
      }
      console.log('finish');
    }
    fetchData();
  }, []);
  data = [
    {
      Lable: 'ФИО',
      Velue: nameInfo,
      Type: 'text',
      id: uuidv4(),
    },
    {
      Lable: 'Город',
      Velue: cityInfo,
      Type: 'text',
      id: uuidv4(),
    },
  ];
  //Конец первого апплета

  return (
    <>
      <FormApplet title="Информация" data={data} />
    </>
  );
};

export default Guide;
