import styles from './FormApplet.module.css';
const FormApplet = () => {
  return (
    <>
      <div className={styles.form_applet}>
        <div className={styles.header}>Titile and button</div>
        <div className={styles.form_applet_table}>
          <form>
            <table>
              <tbody>
                <tr>
                  <td>
                    <label>Город:</label>
                  </td>
                  <td>
                    <input type="text" value="Москва"></input>
                  </td>
                  <td>Адрес:</td>
                  <td>
                    <input type="text" value="Какой то там"></input>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>2</td>
                  <td>2</td>
                  <td>2</td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormApplet;
