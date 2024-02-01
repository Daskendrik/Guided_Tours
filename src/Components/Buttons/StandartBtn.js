import { Link } from 'react-router-dom';
import styles from './StandartBtn.module.css';

const StandartBtn = (props) => {
  const { id, title, func, link, disabled = false } = props;
  console.log(props);
  if (link) {
    return (
      <>
        <Link to={link}>
          <button
            className={styles.btn}
            key={id}
            onClick={func}
            disabled={disabled}
          >
            {title}
          </button>
        </Link>
      </>
    );
  }
  return (
    <button className={styles.btn} key={id} onClick={func} disabled={disabled}>
      {title}
    </button>
  );
};

export default StandartBtn;
