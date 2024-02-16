import { v4 as uuidv4 } from 'uuid';
import styles from './FormColumn.module.css';
import React from 'react';

const FormColum = (props) => {
  const {
    type,
    value,
    readonly,
    id = uuidv4(),
    change,
    arrSelect = [{ id: 1, code: '12', name: '23' }],
  } = props;
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
          className={readonly ? styles.read_only : ''}
          onChange={(e) => change(id, e.target.value)}
          disabled={readonly}
          value={
            value ? arrSelect.filter((el) => el.name === value)[0]?.code : ''
          }
        >
          {arrSelect.map((el) => {
            return (
              <option key={el.id} value={el.code} id={el.code}>
                {el.name}
              </option>
            );
          })}
          <option key={''} value="">
            Не указан
          </option>
        </select>
      );
    case 'data':
      return (
        <input
          type="data"
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
          readOnly={readonly || id === 'id'}
          id={id}
          onChange={(e) => change(id, e.target.value)}
          className={readonly || id === 'id' ? styles.read_only : ''}
        ></input>
      );
  }
};

export default FormColum;
