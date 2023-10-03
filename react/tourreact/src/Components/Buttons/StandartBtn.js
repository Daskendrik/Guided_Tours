import styles from './StandartBtn.module.css';

const StandartBtn = (props) => {
  const { id, title } = props;
  return (
    <button className={styles.btn} key={id}>
      {title}
    </button>
  );
};

export default StandartBtn;
