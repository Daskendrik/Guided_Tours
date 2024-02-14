import { createPortal } from 'react-dom';
import StandartBtn from '../Buttons/StandartBtn.tsx';
import styles from './Delete.module.css';
import { useEffect, useRef } from 'react';
import React from 'react';

const ModalDelete = (props) => {
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
          <h3 className={styles.modal_title}>Удаление записи</h3>
        </div>
        <div className={styles.modal_body}>
          <p>
            Вы уверены, что надо удалить {settings.component}:<br></br>{' '}
            {settings.target}
          </p>
          <div className={styles.buttons}>
            <StandartBtn title="Да" func={settings.func} />
            <StandartBtn title="Нет" func={settings.funcClose} />
          </div>
        </div>
      </dialog>
    </>,
    document.getElementById('modal')
  );
};

export default ModalDelete;
