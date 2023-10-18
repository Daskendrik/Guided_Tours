import styles from './StandartBtn.module.css';

const StandartBtn = (props) => {
  const { id, title, func } = props;
  return (
    <button className={styles.btn} key={id} onClick={func}>
      {title}
    </button>
  );
};

export default StandartBtn;
