import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import StandartBtn from '../Buttons/StandartBtn.tsx';
import ListOfButtonsPage from '../Buttons/ListOfButtonsPage.tsx';
import styles from './ListApplet.module.css';
import Table from './Table.tsx';
import Card from './Card.tsx';
import React from 'react';

const ListApplet = (props) => {
  const {
    buttons = [{ title: 'Кнопка', function: '', id: uuidv4(), link: '' }],
    arrListColum = [],
    title = 'Test',
    changeTarget,
    targetRow,
    blockSize = 5,
  } = props;
  const [displayTable, setDisplayTable] = useState(true);
  const [page, setPage] = useState(0);
  const header = arrListColum.find((data) => data.element === 'Header');
  const body = arrListColum.find((data) => data.element === 'Body');
  const swichDisplay = () => {
    displayTable ? setDisplayTable(false) : setDisplayTable(true);
  };

  let blockDatas: string[] = [];
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
              <StandartBtn
                key="swichDisplay"
                title="Изменить отображение"
                func={swichDisplay}
              />
              {buttons.map((btn) => {
                return (
                  <StandartBtn
                    key={btn.id}
                    title={btn.title}
                    func={btn.func}
                    link={btn.link}
                    disabled={btn.disabled}
                  />
                );
              })}
            </div>
          </div>
          <div className={styles.list_applet_table}>
            {displayTable ? (
              <Table
                header={header}
                blockDatas={blockDatas}
                page={page}
                changeTarget={changeTarget}
                targetRow={targetRow}
              />
            ) : (
              <Card
                header={header}
                blockDatas={blockDatas}
                page={page}
                changeTarget={changeTarget}
                targetRow={targetRow}
              ></Card>
            )}

            <div>
              <ListOfButtonsPage
                pageNext={goNextPage}
                pageBack={goBackPage}
                page={page + 1}
                numofPage={blockDatas.length}
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
