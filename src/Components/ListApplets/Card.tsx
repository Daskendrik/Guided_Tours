import React from 'react';
import styles from './Card.module.css';

const Card = (props) => {
  const { header, blockDatas, page, changeTarget, targetRow } = props;
  console.log(header);
  console.log(blockDatas[0]);
  return (
    <>
      <div className={styles.cards}>
        {blockDatas[0].map((card, index) => {
          return (
            <div className={styles.card} key={card[0]}>
              <div
                className={styles.text_id}
              >{`${header.nameColumn[0].title}: ${card[0]}`}</div>
              <div
                className={styles.text_name}
              >{`${header.nameColumn[1].title}: ${card[1]}`}</div>
              <div className={styles.info}>
                <div
                  className={styles.text_any}
                >{`${header.nameColumn[2].title}: ${card[2]}`}</div>
                <div
                  className={styles.text_any}
                >{`${header.nameColumn[3].title}: ${card[3]}`}</div>
              </div>
            </div>
          );
        })}
        <div className={styles.card}>
          <div className={styles.text_id}>Тут будет ID</div>
          <div className={styles.text_name}>Имя</div>
          <div className={styles.info}>
            <div className={styles.text_any}>Телефон</div>
            <div className={styles.text_any}>Тип контакта</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
