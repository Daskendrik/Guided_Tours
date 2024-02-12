import StandartBtn from './StandartBtn.tsx';
import styles from './ListOfButtonsPage.module.css';
import React from 'react';

const ListOfButtonsPage = (props) => {
  const {
    page = 1,
    pageNext = () => {
      console.log('тык');
    },
    pageBack = () => {
      console.log('тык');
    },
    numofPage,
  } = props;
  return (
    <div className={styles.list_of_btn}>
      <StandartBtn title="<- Назад" func={pageBack} disabled={page === 1} />
      <div className={styles.text}>
        {page}/{numofPage}
      </div>
      <StandartBtn
        title="Вперед -> "
        func={pageNext}
        disabled={page === numofPage}
      />
    </div>
  );
};

export default ListOfButtonsPage;
