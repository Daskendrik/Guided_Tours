import styles from './ListApplet.module.css';
const ListApplet = () => {
  return (
    <>
      <div className={styles.list_applet}>
        <div className={styles.header}>
          <div className={styles.title}>Title</div>
          <div className={styles.button}>Buttons</div>
        </div>
        <div className={styles.list_applet_table}>
          <form>
            <table>
              <thead>
                <td>Number</td>
                <td>Name</td>
                <td>Date</td>
                <td>OK</td>
              </thead>
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
