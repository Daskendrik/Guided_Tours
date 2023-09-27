import styles from './FormApplet.module.css';
const FormApplet = () => {
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
                <tr>
                  <td>
                    <label>Город:</label>
                  </td>
                  <td>
                    <input type="text"></input>
                  </td>
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
                  <td>
                    <label>Город:</label>
                  </td>
                  <td>
                    <input type="text" value="Москва"></input>
                  </td>
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
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormApplet;
