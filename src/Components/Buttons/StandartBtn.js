import { Link } from 'react-router-dom';
import styles from './StandartBtn.module.css';

const StandartBtn = (props) => {
  const { id, title, func, link } = props;
  console.log(link);
  if (link) {
    return (
      <>
        <Link to={link}>
          <button className={styles.btn} key={id} onClick={func}>
            {title}
          </button>
        </Link>
      </>
    );
  }
  return (
    <button className={styles.btn} key={id} onClick={func}>
      {title}
    </button>
  );
};

export default StandartBtn;
