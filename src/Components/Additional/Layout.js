import { Outlet } from 'react-router';
import Footer from './Footer';
import Menu from './Menu';
import styles from './Layout.module.css';

const Layout = () => {
  return (
    <>
      <Menu />
      <div className={styles.body}>
        <Outlet />
      </div>

      <Footer />
    </>
  );
};

export default Layout;
