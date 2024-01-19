import { v4 as uuidv4 } from 'uuid';

const FormColum = (props) => {
  const {
    type,
    value,
    readonly,
    id = uuidv4(),
    change,
    arrSelect,
    changeSelect,
  } = props;
  console.log(arrSelect);
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
    case 'select':
      return (
        <select name="select" onChange={(e) => change(id, e.target.value)}>
          {arrSelect.map((el) => {
            return (
              <option key={el.id} value={el.code}>
                {el.name}
              </option>
            );
          })}
        </select>
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
