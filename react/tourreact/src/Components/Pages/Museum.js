import { UIForm, UIFormData } from '../../Data/museums';
import FormApplet from '../FormApplets/FormApplet';
import ListApplet from '../ListApplets/ListApplet';

const Museum = () => {
  return (
    <>
      <FormApplet UIForm={UIForm} UIFormData={UIFormData} />
      <ListApplet />
    </>
  );
};

export default Museum;
