import FormApplet from '../../FormApplets/FormApplet';
import { v4 as uuidv4 } from 'uuid';

const Contact = () => {
  const data = [
    {
      Lable: 'Test',
      Velue: 'Test',
      Type: 'text',
      id: uuidv4(),
    },
    {
      Lable: 'Test',
      Velue: 'Test',
      Type: 'text',
      id: uuidv4(),
    },
    {
      Lable: 'Test',
      Velue: 'Test',
      Type: 'text',
      id: uuidv4(),
    },
    {
      Lable: 'Test',
      Velue: 'Test',
      Type: 'text',
      id: uuidv4(),
    },
  ];
  return (
    <>
      <FormApplet title="Контакт" data={data} />
    </>
  );
};

export default Contact;
