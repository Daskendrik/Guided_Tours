import styles from './FormApplet.module.css';
import { v4 as uuidv4 } from 'uuid';
import FormColum from './FormColum.tsx';
import StandartBtn from '../Buttons/StandartBtn.tsx';
import React from 'react';
import { FieldsApplet } from '../Types.ts';

const FormApplet = (props) => {
  const {
    buttons = [{ title: 'Кнопка', function: '', id: uuidv4() }],
    data = [
      {
        Lable: 'Test',
        Value: 'Test',
        Type: 'textarea',
        id: uuidv4(),
      },
    ],
    title = 'Test',
    isReadOnly = true,
    changeData,
  } = props;
  const formData = { id: 1 };
  for (let i = 0; i < data.length; i++) {
    formData[data[i].id] = data[i].Value;
  }
  JSON.stringify(formData);
  const arrRow: FieldsApplet[] = [];
  function createArrayOfRow(arr) {
    for (let i = 0; i < arr.length; i += 3) {
      const chunk = arr.slice(i, i + 3);
      arrRow.push(chunk);
    }
  }

  createArrayOfRow(data);
  return (
    <>
      <div className={styles.form_applet}>
        <div className={styles.header}>
          <div className={styles.title}>{title}</div>
          <div className={styles.button}>
            {buttons.map((btn) => {
              return (
                <StandartBtn
                  key={btn.id}
                  title={btn.title}
                  func={btn.func}
                  link={btn.link}
                  disabled={btn.disabled}
                />
              );
            })}
          </div>
        </div>
        <div className={styles.form_applet_table}>
          <form>
            <table>
              <tbody>
                {arrRow.map((row, index) => {
                  return (
                    <tr key={index}>
                      {row.map((col) => {
                        let arrSelect = [];
                        if (col.hasOwnProperty('arrSelect')) {
                          arrSelect = col.arrSelect;
                        }
                        return (
                          <td key={col.id}>
                            <div className={styles.colume_div}>
                              <div className={styles.form_td_div_lable}>
                                {col.Lable}
                              </div>
                              <div className={styles.form_td_div_value}>
                                <FormColum
                                  readonly={isReadOnly}
                                  type={col.Type}
                                  value={col.Value}
                                  id={col.id}
                                  change={changeData}
                                  arrSelect={arrSelect}
                                />
                              </div>
                            </div>
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormApplet;
