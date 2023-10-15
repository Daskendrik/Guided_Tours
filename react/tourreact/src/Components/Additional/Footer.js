import StandartBtn from '../Buttons/StandartBtn';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div>
        <StandartBtn title="Распечатать" />
        <StandartBtn title="Калькулятор" />
      </div>
    </div>
  );
};

export default Footer;
