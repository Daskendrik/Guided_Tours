import { v4 as uuidv4 } from 'uuid';

const FormColum = (props) => {
  const {
    type,
    value,
    readonly,
    id = uuidv4(),
    change,
    arrSelect = [{ id: 1, code: '12', name: '23' }],
  } = props;
  console.log(arrSelect);
  // if (id === 'id') return;
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
      console.log(arrSelect);
      return (
        <select name="select" onChange={(e) => change(id, e.target.value)}>
          {arrSelect.map((el) => {
            return (
              <option key={el.id} value={el.code}>
                {el.name.replace(/\\u[\dA-F]{4}/gi, function (match) {
                  return String.fromCharCode(
                    parseInt(match.replace(/\\u/g, ''), 16)
                  );
                })}
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
