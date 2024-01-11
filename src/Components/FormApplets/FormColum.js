import { v4 as uuidv4 } from 'uuid';

const FormColum = (props) => {
  const { type, value, readonly, id = uuidv4(), change } = props;
  switch (type) {
    case 'textarea':
      return (
        <textarea
          defaultValue={value}
          readOnly={readonly}
          id={id}
          onChange={(e) => change(id, e.target.value)}
        ></textarea>
      );
    case 'tel':
      return (
        <input
          defaultValue={value}
          type="tel"
          readOnly={readonly}
          id={id}
          onChange={(e) => change(id, e.target.value)}
        ></input>
      );
    case 'email':
      return (
        <input
          defaultValue={value}
          type="email"
          readOnly={readonly}
          id={id}
          onChange={(e) => change(id, e.target.value)}
        ></input>
      );
    default:
      return (
        <input
          defaultValue={value}
          readOnly={readonly}
          id={id}
          onChange={(e) => change(id, e.target.value)}
        ></input>
      );
  }
};

export default FormColum;
