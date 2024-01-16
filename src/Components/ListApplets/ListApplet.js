import StandartBtn from '../Buttons/StandartBtn';
import styles from './ListApplet.module.css';
import { v4 as uuidv4 } from 'uuid';

const ListApplet = (props) => {
  const {
    buttons = [{ title: 'Кнопка', function: '', id: uuidv4(), link: '' }],
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
    changeTarget,
    targetRow,
  } = props;
  const header = arrListColum.find((data) => data.element === 'Header');
  const body = arrListColum.find((data) => data.element === 'Body');
  console.log(targetRow);

  return (
    <>
      <div className={styles.list_applet}>
        <div className={styles.header}>
          <div className={styles.title}>{title}</div>
          <div className={styles.button}>
            {buttons.map((btn) => {
              return (
                <StandartBtn
                  key={btn.id}
                  title={btn.title}
                  func={btn.func}
                  link={btn.link}
                />
              );
            })}
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
                {body.elements.map((row, index) => {
                  return (
                    <tr key={row[0]} id={row[0]} onClick={changeTarget}>
                      {row.map((col, index) => {
                        console.log(row[0]);
                        return (
                          <td
                            key={index}
                            className={
                              +targetRow === row[0] ? 'active_row' : ''
                            }
                          >
                            {col}
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

export default ListApplet;
