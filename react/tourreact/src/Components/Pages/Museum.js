import { useEffect } from 'react';
import { UIBtn, UIForm } from '../../Data/museums';
import FormApplet from '../FormApplets/FormApplet';
import ListApplet from '../ListApplets/ListApplet';
import { useState } from 'react';

const Museum = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.log(error))
      .finally(() => console.log('Данные загруженны'));
  }, []);

  console.log(data);

  return (
    <>
      <FormApplet UIForm={UIForm} UIBtn={UIBtn} />
      <ListApplet />
    </>
  );
};

export default Museum;
