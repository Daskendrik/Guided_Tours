import { createPortal } from 'react-dom';
import StandartBtn from '../Buttons/StandartBtn.tsx';
import styles from './Save.module.css';
import { useEffect, useRef } from 'react';
import React from 'react';

const ModalSave = (props) => {
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
          <h4>{settings.text}</h4>
          <div className={styles.buttons}>
            <StandartBtn title="Вернуться на список" link={settings.goBtn[0]} />
            <StandartBtn title="Закрыть" func={settings.funcClose} />
          </div>
        </div>
      </dialog>
    </>,
    document.getElementById('modal')
  );
};

export default ModalSave;
