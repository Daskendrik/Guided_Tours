import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import FormApplet from '../FormApplets/FormApplet';

const Guide = (props) => {
  const [isReadOnly, setReadOnly] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  // 1 Апплет - Информация
  const [nameInfo, setNameInfo] = useState('Test');
  const [cityInfo, setCityInfo] = useState('Test');
  const [adressInfo, setAdressInfo] = useState('Test');
  const [telInfo, setTelInfo] = useState('Test');
  const [documentInfo, setDocumentInfo] = useState('Test');
  const [commetInfo, setCommetInfo] = useState('Test');

  return (
    <>
      <FormApplet title="Информация" />
    </>
  );
};

export default Guide;
