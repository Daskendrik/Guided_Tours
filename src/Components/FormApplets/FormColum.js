import { v4 as uuidv4 } from 'uuid';

const FormColum = (props) => {
  const { type, velue, readonly, id = uuidv4() } = props;
  switch (type) {
    case 'textarea':
      return (
        <textarea defaultValue={velue} readOnly={readonly} id={id}></textarea>
      );
    case 'tel':
      return (
        <input
          defaultValue={velue}
          type="tel"
          readOnly={readonly}
          id={id}
        ></input>
      );
    case 'email':
      return (
        <input
          defaultValue={velue}
          type="email"
          readOnly={readonly}
          id={id}
        ></input>
      );
    default:
      return <input defaultValue={velue} readOnly={readonly} id={id}></input>;
  }
};

export default FormColum;
