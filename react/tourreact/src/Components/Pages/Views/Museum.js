import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import FormApplet from '../../FormApplets/FormApplet';
import ListApplet from '../../ListApplets/ListApplet';
import { useState } from 'react';

const Museum = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isReadOnly, setReadOnly] = useState(true);

  //Формирование и изменение первого апплета
  const [nameInfo, setNameInfo] = useState('Test');
  const [telInfo, setTelInfo] = useState('Test');
  const [documentInfo, setDocumentInfo] = useState('Test');
  const [commetInfo, setCommetInfo] = useState('Test');
  let dataMain = [];
  let dataList = [];

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
          setTelInfo(dataIntegration.telInfo);
          setDocumentInfo(dataIntegration.documentInfo);
          setCommetInfo(dataIntegration.commetInfo);
        }
      } catch (error) {
        console.log(error);
      }
      console.log('finish');
    }
    fetchData();
    setIsLoading(false);
  }, []);
  dataMain = [
    {
      Lable: 'ФИО',
      Velue: nameInfo,
      Type: 'text',
      id: uuidv4(),
    },
    {
      Lable: 'Телефон',
      Velue: telInfo,
      Type: 'tel',
      id: uuidv4(),
    },
    {
      Lable: 'Паспорт',
      Velue: documentInfo,
      Type: 'text',
      id: uuidv4(),
    },
    {
      Lable: 'Комментарий',
      Velue: commetInfo,
      Type: 'textarea',
      id: uuidv4(),
    },
  ];
  //Конец первого апплета
  dataList = [
    {
      element: 'Header',
      nameColumn: [
        { title: 'Номер тура', id: 'number' },
        { title: 'Название тура', id: 'name' },
        { title: 'Дата проведения', id: 'date' },
      ],
    },
    {
      element: 'Body',
      elements: [
        ['1234', '123', '123'],
        ['12345', '123', '123'],
        ['123567', '123', '123'],
      ],
    },
  ];

  if (isLoading) {
    return <>Loading...</>;
  }

  return (
    <>
      <FormApplet data={dataMain} title="Информация" />
      <ListApplet arrListColum={dataList} title="Ближайшее посещение групп" />
    </>
  );
};

export default Museum;
