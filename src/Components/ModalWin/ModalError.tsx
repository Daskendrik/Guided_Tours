import { useEffect, useRef } from 'react';
import StandartBtn from '../Buttons/StandartBtn.tsx';
import styles from './Error.module.css';
import { createPortal } from 'react-dom';
import React from 'react';

const ModalError = (props) => {
  const { settings } = props;

  const modalWin = useRef<any>();
  useEffect(() => {
    if (settings.open) {
      modalWin.current.showModal();
    } else {
      modalWin.current.close();
    }
  }, [settings.open]);

  return createPortal(
    <>
      <dialog ref={modalWin}>
        <div className={styles.modal_header}>
          <h3 className={styles.modal_title}>{settings.title}</h3>
        </div>
        <div className={styles.modal_body}>
          <p>
            Ошибка при {settings.doing}. <br></br>Повторите позже или обратитесь
            к администратору. <br></br>Текст ошибки:<br></br>{' '}
            <span className={styles.err_text}>{settings.err}</span>
          </p>
          <div className={styles.buttons}>
            <StandartBtn title="Ок" func={settings.func} />
          </div>
        </div>
      </dialog>
    </>,
    document.getElementById('modal')
  );
};

export default ModalError;
