import StandartBtn from './StandartBtn';
import styles from './ListOfButtonsPage.module.css';

const ListOfButtonsPage = (props) => {
  const {
    page = 1,
    pageNext = () => {
      console.log('тык');
    },
    pageBack = () => {
      console.log('тык');
    },
  } = props;
  return (
    <div className={styles.list_of_btn}>
      <StandartBtn title="<- Назад" func={pageBack} />
      <div className={styles.text}>{page}</div>
      <StandartBtn title="Вперед -> " func={pageNext} />
    </div>
  );
};

export default ListOfButtonsPage;
