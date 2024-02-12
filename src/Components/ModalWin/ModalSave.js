import { createPortal } from 'react-dom';
import StandartBtn from '../Buttons/StandartBtn.tsx';
import styles from './Save.module.css';
import { useEffect, useRef } from 'react';

const ModalSave = (props) => {
  const {
    title = 'Сохранение',
    text = 'Сохранен',
    goBtn = [],
    open = false,
  } = props;
  const modalWin = useRef();

  useEffect(() => {
    if (open) {
      modalWin.current.showModal();
    } else {
      modalWin.current.close();
    }
  }, [open]);

  return createPortal(
    <>
      <dialog ref={modalWin}>
        <div className={styles.modal_header}>
          <h3 className={styles.modal_title}>{title}</h3>
        </div>
        <div className={styles.modal_body}>
          <h4>{text}</h4>
          <div className={styles.buttons}>
            <StandartBtn title="Вернуться на список" link={goBtn[0]} />
            <StandartBtn title="Перейти в Карточку" link={goBtn[1]} />
          </div>
        </div>
      </dialog>
    </>,
    document.getElementById('modal')
  );
};

export default ModalSave;
