import { createPortal } from 'react-dom';
import StandartBtn from '../Buttons/StandartBtn.tsx';
import styles from './Delete.module.css';
import { useEffect, useRef } from 'react';

const ModalDelete = (props) => {
  const {
    open = false,
    funcClose,
    component = 'Констакт',
    name = 'ТестУдалить',
    func = () => {
      console.log('удаление');
    },
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
          <h3 className={styles.modal_title}>Удаление записи</h3>
        </div>
        <div className={styles.modal_body}>
          <p>
            Вы уверены, что надо удалить {component}:<br></br> {name}
          </p>
          <div className={styles.buttons}>
            <StandartBtn title="Да" func={func} />
            <StandartBtn title="Нет" func={funcClose} />
          </div>
        </div>
      </dialog>
    </>,
    document.getElementById('modal')
  );
};

export default ModalDelete;
