import { createPortal } from 'react-dom';
import StandartBtn from '../Buttons/StandartBtn';
import styles from './Delete.module.css';
import { useEffect, useRef } from 'react';

const ModalDelete = (props) => {
  const {
    open = false,
    title = 'Удаление',
    component = 'Констакт',
    name = 'ТестУдалить',
    func = () => {
      console.log('удаление');
    },
    funcClose,
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
            Вы уверены, что надо удалить {component}:<br></br> {name}
          </p>
          <div className={styles.buttons}>
            <StandartBtn title="Да" func={func} />
            <StandartBtn title="Нет" func={funcClose} />
          </div>
        </div>
      </dialog>

      {/* <div id="openModalDelete" className={styles.modal}>
        <div className={styles.modal_dialog}>
          <div className={styles.modal_content}>
            <div className={styles.modal_header}>
              <h3 className={styles.modal_title}>{title}</h3>
              <a href="#close" title="Close" className={styles.close}>
                Закрыть
              </a>
            </div>
            <div className={styles.modal_body}>
              <p>
                Вы уверены, что надо удалить {component}:<br></br> {name}
              </p>
              <div className={styles.buttons}>
                <StandartBtn title="Да" func={func} />
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>,
    document.getElementById('modal')
  );
};

export default ModalDelete;
