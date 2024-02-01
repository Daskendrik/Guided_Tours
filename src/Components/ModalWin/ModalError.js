import { useEffect, useRef } from 'react';
import StandartBtn from '../Buttons/StandartBtn';
import styles from './Error.module.css';
import { createPortal } from 'react-dom';

const ModalError = (props) => {
  const {
    open = false,
    title = 'Ошибка',
    doing = 'Констакт',
    func = () => {
      console.log('удаление');
    },
    err = 'Текст ошибки',
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
          <p>
            Ошибка при {doing}. <br></br>Повторите позже или обратитесь к
            администратору. <br></br>Текст ошибки:<br></br>{' '}
            <span className={styles.err_text}>{err}</span>
          </p>
          <div className={styles.buttons}>
            <StandartBtn title="Ок" func={func} />
          </div>
        </div>
      </dialog>
    </>,
    document.getElementById('modal')
  );
};

export default ModalError;
