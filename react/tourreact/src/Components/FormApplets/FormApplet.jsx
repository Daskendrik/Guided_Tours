import styles from './FormApplet.module.css';
import { v4 as uuidv4 } from 'uuid';

const FormApplet = (props) => {
  const {
    UIForm = ['Name', 'City', 'Phone', 'Some', 'Thing', 'One', 'more'],
    UIBtn = [{ title: 'Кнопка', function: '', ud: uuidv4() }],
    numCol,
    arrColum,
  } = props;
  const numRow = Math.ceil(numCol / 3);
  const arrRow = [];
  const arrRow1 = [];
  console.log(arrColum);
  console.log(numRow);

  function createArrayOfRow(arr) {
    for (let i = 0; i < arr.length; i += 3) {
      const chunk = arr.slice(i, i + 3);
      arrRow1.push(chunk);
    }
  }

  createArrayOfRow(arrColum);
  console.log(arrRow1);

  // let colNum = 1;
  // for (let i = 1; i <= numRow; i++) {
  //   let arr = [];
  //   for (colNum; colNum / i <= 3; colNum++) {
  //     if (UIForm[colNum - 1]) {
  //       arr.push(UIForm[colNum - 1]);
  //     }
  //   }
  //   arrRow.push(arr);
  // }

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
                {arrRow1.map((row) => {
                  return (
                    <tr>
                      {row.map((col) => {
                        return (
                          <>
                            <td>{col.Lable}</td>
                            <td>
                              <input value={col.Velue} type={col.type}></input>
                            </td>
                          </>
                        );
                      })}
                    </tr>
                  );
                })}
                {/* {arrRow.map((row, index) => {
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
                })} */}
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormApplet;
