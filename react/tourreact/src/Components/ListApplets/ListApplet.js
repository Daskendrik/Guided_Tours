import styles from './ListApplet.module.css';
const ListApplet = (props) => {
  const { arrListColum } = props;
  const header = arrListColum.find((data) => data.element === 'Header');
  const body = arrListColum.find((data) => data.element === 'Body');
  console.log(body);
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
                <tr>
                  {header.nameColumn.map((col) => {
                    return <td key={col.id}>{col.title}</td>;
                  })}
                </tr>
              </thead>
              <tbody>
                {body.elements.map((row) => {
                  return (
                    <tr>
                      {row.map((col) => {
                        return <td>{col}</td>;
                      })}
                    </tr>
                  );
                })}
                {/* <tr>
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
                </tr> */}
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </>
  );
};

export default ListApplet;
