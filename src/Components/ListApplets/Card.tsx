import React from 'react';
import styles from './Card.module.css';

const Card = (props) => {
  const { header, blockDatas = [], page, changeTarget, targetRow } = props;
  console.log(header);
  console.log(blockDatas[page]);

  return (
    <>
      <div className={styles.cards}>
        {blockDatas[0].map((card) => {
          return (
            <div
              className={
                +targetRow === card[0]
                  ? `active_row ${styles.card}`
                  : `${styles.card}`
              }
              key={card[0]}
              onClick={changeTarget}
              id={card[0]}
            >
              {card.map((info, index) => {
                if (index === 0) {
                  return (
                    <div
                      className={styles.text_id}
                      key={index}
                    >{`${header.elements[index].title}: ${info}`}</div>
                  );
                } else if (index === 1) {
                  return (
                    <div
                      className={styles.text_name}
                      key={index}
                    >{`${header.elements[index].title}: ${info}`}</div>
                  );
                } else {
                  return (
                    <div className={styles.text_any} key={index}>{`${
                      header.elements[index].title
                    }: ${info ? info : 'Не указано'}`}</div>
                  );
                }
              })}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Card;
