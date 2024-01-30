import { v4 as uuidv4 } from 'uuid';
import styles from './FormColumn.module.css';

const FormColum = (props) => {
  const {
    type,
    value,
    readonly,
    id = uuidv4(),
    change,
    arrSelect = [{ id: 1, code: '12', name: '23' }],
  } = props;
  console.log(type);
  switch (type) {
    case 'textarea':
      return (
        <textarea
          defaultValue={value}
          readOnly={readonly}
          id={id}
          className={readonly ? styles.read_only : ''}
          onChange={(e) => change(id, e.target.value)}
        ></textarea>
      );
    case 'tel':
      return (
        <input
          defaultValue={value}
          type="tel"
          readOnly={readonly}
          className={readonly ? styles.read_only : ''}
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
          className={readonly ? styles.read_only : ''}
          id={id}
          onChange={(e) => change(id, e.target.value)}
        ></input>
      );
    case 'select':
      return (
        <select
          name="select"
          className={readonly ? styles.read_only : ''}
          onChange={(e) => change(id, e.target.value)}
        >
          {arrSelect.map((el) => {
            return (
              <option key={el.id} value={el.code}>
                {el.name}
              </option>
            );
          })}
        </select>
      );
    case 'date':
      return (
        <input
          type="date"
          readOnly={id === 'created' || id === 'update' ? true : readonly}
          className={
            readonly || id === 'created' || id === 'update'
              ? styles.read_only
              : ''
          }
          id={id}
          onChange={(e) => change(id, e.target.value)}
          value={value}
        ></input>
      );
    default:
      return (
        <input
          defaultValue={value}
          readOnly={readonly}
          id={id}
          onChange={(e) => change(id, e.target.value)}
          className={readonly ? styles.read_only : ''}
        ></input>
      );
  }
};

export default FormColum;
