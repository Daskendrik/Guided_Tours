import { Link } from 'react-router-dom';
import StandartBtn from '../Buttons/StandartBtn';
import ListOfButtonsPage from '../Buttons/ListOfButtonsPage';
import styles from './ListApplet.module.css';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

const ListApplet = (props) => {
  const {
    buttons = [{ title: 'Кнопка', function: '', id: uuidv4(), link: '' }],
    arrListColum = [],
    title = 'Test',
    changeTarget,
    targetRow,
    blockSize = 5,
  } = props;
  const [page, setPage] = useState(0);
  const header = arrListColum.find((data) => data.element === 'Header');
  const body = arrListColum.find((data) => data.element === 'Body');

  let blockDatas = [];
  for (let i = 0; i < body.elements.length; i += blockSize) {
    const block = body.elements.slice(i, i + blockSize);
    blockDatas.push(block);
  }

  const goNextPage = () => {
    if (page < blockDatas.length - 1) {
      console.log('page');
      let a = page;
      setPage(a + 1);
    }
  };

  const goBackPage = () => {
    if (page > 0) {
      let a = page;
      setPage(a - 1);
    }
  };
  if (blockDatas.length > 0) {
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
            <div>
              <table>
                <thead>
                  <tr>
                    {header.nameColumn.map((col) => {
                      return <td key={col.id}>{col.title}</td>;
                    })}
                  </tr>
                </thead>
                <tbody>
                  {blockDatas[page].map((row, index) => {
                    return (
                      <tr key={row[0]} id={row[0]} onClick={changeTarget}>
                        {row.map((col, index) => {
                          if (index === 1) {
                            return (
                              <td
                                key={index}
                                className={
                                  +targetRow === row[0] ? 'active_row' : ''
                                }
                              >
                                <Link
                                  className={styles.go_in}
                                  to={row[0].toString()}
                                >
                                  {col}
                                </Link>
                              </td>
                            );
                          } else {
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
                          }
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div>
              <ListOfButtonsPage
                pageNext={goNextPage}
                pageBack={goBackPage}
                page={page + 1}
              />
            </div>
          </div>
        </div>
      </>
    );
  } else {
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
            <div>
              <table>
                <thead>
                  <tr>
                    {header.nameColumn.map((col) => {
                      return <td key={col.id}>{col.title}</td>;
                    })}
                  </tr>
                </thead>
              </table>
            </div>
            <div>
              <ListOfButtonsPage
                pageNext={goNextPage}
                pageBack={goBackPage}
                page={page + 1}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default ListApplet;
