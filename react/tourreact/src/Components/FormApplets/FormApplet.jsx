import styles from './FormApplet.module.css';
import { v4 as uuidv4 } from 'uuid';

const FormApplet = (props) => {
  const {
    UIForm = ['Name', 'City', 'Phone', 'Some', 'Thing', 'One', 'more'],
    UIBtn = [{ title: 'Кнопка', function: '', ud: uuidv4() }],
  } = props;
  const numRow = Math.ceil(UIForm.length / 3);
  const arrRow = [];
  let colNum = 1;
  for (let i = 1; i <= numRow; i++) {
    let arr = [];
    for (colNum; colNum / i <= 3; colNum++) {
      if (UIForm[colNum - 1]) {
        arr.push(UIForm[colNum - 1]);
      }
    }
    arrRow.push(arr);
  }
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
                      {row.map((td, index) => {
                        return (
                          <>
                            <td key={index}>{td}</td>
                            <td>
                              <input type="text"></input>
                            </td>
                          </>
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
