import { UIForm } from '../../Data/museums';
import FormApplet from '../FormApplets/FormApplet';
import ListApplet from '../ListApplets/ListApplet';

const Museum = () => {
  return (
    <>
      <FormApplet UIForm={UIForm} />
      <ListApplet />
    </>
  );
};

export default Museum;
