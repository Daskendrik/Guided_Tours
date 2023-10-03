import styles from './FormApplet.module.css';
import { v4 as uuidv4 } from 'uuid';
import FormColum from './FormColum';

const FormApplet = (props) => {
  const {
    UIBtn = [{ title: 'Кнопка', function: '', id: uuidv4() }],
    arrColum = [
      {
        Lable: 'Стоимость',
        Velue: 'Тут много чего будет написано',
        Type: 'textarea',
        id: uuidv4(),
      },
    ],
  } = props;
  const arrRow = [];

  function createArrayOfRow(arr) {
    for (let i = 0; i < arr.length; i += 3) {
      const chunk = arr.slice(i, i + 3);
      arrRow.push(chunk);
    }
  }

  createArrayOfRow(arrColum);

  return (
    <>
      <div className={styles.form_applet}>
        <div className={styles.header}>
          <div className={styles.title}>Информация</div>
          <div className={styles.button}>
            {UIBtn.map((btn) => {
              return <button key={btn.id}>{btn.title}</button>;
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
                        return (
                          <td key={col.id}>
                            <div className={styles.form_td_div_lable}>
                              {col.Lable}
                            </div>
                            <div className={styles.form_td_div_value}>
                              <FormColum type={col.Type} velue={col.Velue} />
                              {/* <input
                                defaultValue={col.Velue}
                                type={col.Type}
                              ></input> */}
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
