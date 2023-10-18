import { NavLink } from 'react-router-dom';
import styles from './Menu.module.css';

const Menu = () => {
  return (
    <>
      <div className={styles.menu}>
        <NavLink to="test">Тест</NavLink>
        <NavLink to="test">Тест</NavLink>
        <NavLink to="test">Тест</NavLink>
      </div>
    </>
  );
};

export default Menu;
