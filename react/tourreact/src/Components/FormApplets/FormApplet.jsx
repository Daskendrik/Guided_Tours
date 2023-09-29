import styles from './FormApplet.module.css';
const FormApplet = (props) => {
  const { UIForm = ['Name', 'City', 'Phone', 'Some', 'Thing', 'One', 'more'] } =
    props;
  const numRow = Math.ceil(UIForm.length / 3);
  console.log(numRow);
  const arrRow = [];
  let colNum = 1;
  for (let i = 1; i <= numRow; i++) {
    let arr = [];
    for (colNum; colNum / i <= 3; colNum++) {
      if (UIForm[colNum - 1]) {
        arr.push(UIForm[colNum - 1]);
        console.log(arr);
      }
    }
    arrRow.push(arr);
  }
  console.log(arrRow);
  return (
    <>
      <div className={styles.form_applet}>
        <div className={styles.header}>
          <div className={styles.title}>Title</div>
          <div className={styles.button}>Buttons</div>
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
                            <input type="text"></input>
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
