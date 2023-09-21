import styles from './ListApplet.module.css';
const ListApplet = () => {
  return (
    <>
      <div className={styles.list_applet}>
        <div className={styles.header}>Titile and button</div>
        <div className={styles.list_applet_table}>
          <form>
            <table>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>2</td>
                  <td>2</td>
                  <td>2</td>
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

export default ListApplet;
