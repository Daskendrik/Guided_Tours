import { Link } from 'react-router-dom';
import styles from './StandartBtn.module.css';
import React from 'react';

const StandartBtn = (props) => {
  const { id, title, func, link, disabled = false } = props;
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
