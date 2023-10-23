import StandartBtn from '../Buttons/StandartBtn';
import styles from './ListApplet.module.css';
const ListApplet = (props) => {
  const {
    arrListColum = [
      {
        element: 'Header',
        nameColumn: [
          { title: 'Test', id: 'number' },
          { title: 'Test', id: 'name' },
        ],
      },
      {
        element: 'Body',
        elements: [
          ['1234', '123'],
          ['12345', '123'],
          ['123567', '123'],
        ],
      },
    ],
    title = 'Test',
  } = props;
  const header = arrListColum.find((data) => data.element === 'Header');
  const body = arrListColum.find((data) => data.element === 'Body');
  console.log(body);
  return (
    <>
      <div className={styles.list_applet}>
        <div className={styles.header}>
          <div className={styles.title}>{title}</div>
          <div className={styles.button}>
            <StandartBtn title="Test" />
          </div>
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
                    <tr key={row[0]}>
                      {row.map((col, index) => {
                        return <td key={index}>{col}</td>;
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

export default ListApplet;
