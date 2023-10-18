import { useEffect } from 'react';
import FormApplet from '../../FormApplets/FormApplet';
import ListApplet from '../../ListApplets/ListApplet';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Bus = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isReadOnly, setReadOnly] = useState(true);

  const [namberInfo, setNamberInfo] = useState('а425ув'); //Номер автобуса
  const [markInfo, setMarkInfo] = useState('Mers'); //Марка транпорта
  const [ptcInfo, setPTCInfo] = useState('1231DAF45AF'); //ПТС
  const [sitsInfo, setSitsInfo] = useState('24'); //Количество мест
  const [companyInfo, setCompanyInfo] = useState('AVTOBUS'); //Фирма
  const [companyTelInfo, setCompanyTelInfo] = useState('8-958-987-54-75'); //Телефон фирмы
  const [driversNameInfo, setDriversNameInfo] = useState('Петрович'); //Имя водителя
  const [driversTelInfo, setDriversTelInfo] = useState('8-958-987-54-75'); //Телефон водителя
  const [commetInfo, setCommetInfo] = useState('Test'); //Комментарий
  let dataMain = [];
  let dataList = [];
  let buttons = [];

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          'https://my-json-server.typicode.com/Daskendrik/demo_data/db'
        );
        const dataIntegration = await res.json();
        console.log(dataIntegration);
        if (!!dataIntegration) {
          setNamberInfo(dataIntegration.namberInfo);
          setMarkInfo(dataIntegration.markInfo);
          setPTCInfo(dataIntegration.ptcInfo);
          setSitsInfo(dataIntegration.sitsInfo);
          setCompanyInfo(dataIntegration.companyTelInfo);
          setCompanyTelInfo(dataIntegration.commetInfo);
          setDriversNameInfo(dataIntegration.driversNameInfo);
          setDriversTelInfo(dataIntegration.driversTelInfo);
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
      Lable: 'Номер автобуса',
      Velue: namberInfo,
      Type: 'text',
      id: uuidv4(),
    },
    {
      Lable: 'Марка транпорта',
      Velue: markInfo,
      Type: 'text',
      id: uuidv4(),
    },
    {
      Lable: 'ПТС',
      Velue: ptcInfo,
      Type: 'text',
      id: uuidv4(),
    },
    {
      Lable: 'Количество мест',
      Velue: sitsInfo,
      Type: 'text',
      id: uuidv4(),
    },
    {
      Lable: 'Фирма',
      Velue: companyInfo,
      Type: 'text',
      id: uuidv4(),
    },
    {
      Lable: 'Телефон фирмы',
      Velue: companyTelInfo,
      Type: 'tel',
      id: uuidv4(),
    },
    {
      Lable: 'Имя водителя',
      Velue: driversNameInfo,
      Type: 'text',
      id: uuidv4(),
    },
    {
      Lable: 'Телефон водителя',
      Velue: driversTelInfo,
      Type: 'tel',
      id: uuidv4(),
    },
    {
      Lable: 'Комментарий',
      Velue: commetInfo,
      Type: 'textarea',
      id: uuidv4(),
    },
  ];

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

  function handleSetReadOnly() {
    setReadOnly(false);
  }

  buttons = [
    {
      id: 'change',
      title: 'Изменить',
      func: function handleSetReadOnly() {
        setReadOnly(false);
      },
    },
    {
      id: 'set',
      title: 'Сохранить',
      func: function handleSetReadOnly() {
        setReadOnly(true);
      },
    },
  ];
  if (isLoading) {
    return <>Loading...</>;
  }

  return (
    <>
      <FormApplet
        data={dataMain}
        title="Информация"
        buttons={buttons}
        isReadOnly={isReadOnly}
      />
      <ListApplet arrListColum={dataList} title="Ближайшее группы" />
    </>
  );
};

export default Bus;
