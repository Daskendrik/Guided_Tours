import { NavLink } from 'react-router-dom';
import styles from './Menu.module.css';

const Menu = () => {
  return (
    <>
      <div className={styles.menu}>
        <div className={styles.block}>
          <div className={styles.link}>
            <NavLink to="tour">Туры</NavLink>
          </div>
          <div className={styles.link}>
            <NavLink to="bus">Автобусы</NavLink>
          </div>
          <div className={styles.link}>
            <NavLink to="museum">Музеи</NavLink>
          </div>
          <div className={styles.link}>
            <NavLink to="guide">Гиды</NavLink>
          </div>
          <div className={styles.link}>
            <NavLink to="restorant">Рестораны</NavLink>
          </div>
          <div className={styles.link}>
            <NavLink to="company_bus">АвтоКомпании</NavLink>
          </div>
        </div>
        <div className={styles.calendar}>
          <NavLink to="сalendar">Календарь</NavLink>
        </div>
        <div className={styles.block}>
          <div className={styles.link}>
            <NavLink to="type_lov">Справочнки</NavLink>
          </div>
          <div className={styles.link}>
            <NavLink to="contact">Контакты</NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
