import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import FormApplet from '../../FormApplets/FormApplet';
const MainFormAppletGuide = () => {
  const [nameInfo, setNameInfo] = useState('Test');
  const [cityInfo, setCityInfo] = useState('Test');
  const [adressInfo, setAdressInfo] = useState('Test');
  const [telInfo, setTelInfo] = useState('Test');
  const [documentInfo, setDocumentInfo] = useState('Test');
  const [commetInfo, setCommetInfo] = useState('Test');
  let data = {};
  let dataArr = [];
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          'https://my-json-server.typicode.com/Daskendrik/demo_data/db'
        );
        data = await res.json();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
      console.log('finish');
    }
    fetchData();
  }, []);
  if (!!data) {
    setNameInfo(data.nameInfo);
    setCityInfo(data.cityInfo);
    setAdressInfo(data.adressInfo);
    setTelInfo(data.telInfo);
    setDocumentInfo(data.documentInfo);
    setCommetInfo(data.nameInfo);
  }

  return <FormApplet />;
};

export default MainFormAppletGuide;
