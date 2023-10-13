import styles from './FormApplet.module.css';
import { v4 as uuidv4 } from 'uuid';
import FormColum from './FormColum';
import StandartBtn from '../Buttons/StandartBtn';

const FormApplet = (props) => {
  const {
    UIBtn = [{ title: 'Кнопка', function: '', id: uuidv4() }],
    data = [
      {
        Lable: 'Test',
        Velue: 'Test',
        Type: 'textarea',
        id: uuidv4(),
      },
    ],
    title = 'Test',
  } = props;
  const arrRow = [];

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
            {UIBtn.map((btn) => {
              return <StandartBtn key={btn.id} title={btn.title} />;
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
                            <div className={styles.colume_div}>
                              <div className={styles.form_td_div_lable}>
                                {col.Lable}
                              </div>
                              <div className={styles.form_td_div_value}>
                                <FormColum type={col.Type} velue={col.Velue} />
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
