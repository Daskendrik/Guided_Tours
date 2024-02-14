import React from 'react';
import { createPortal } from 'react-dom';
import { useEffect, useRef } from 'react';
import StandartBtn from '../Buttons/StandartBtn.tsx';
import styles from './Seach.module.css';

const ModalSeach = (props) => {
  const {
    title = 'Поиск',
    arrcol = [
      { id: 'col1', name: 'Фамилия' },
      { id: 'col2', name: 'Телефон' },
    ],
    seach = () => {
      console.log('Поиск дефолт');
    },
    open,
    funcClose,
  } = props;
  const modalWin = useRef<any>();

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
        <div className={styles.modal_content}>
          <div className={styles.modal_header}>
            <h3 className={styles.modal_title}>{title}</h3>
          </div>
          <div className={styles.modal_body}>
            <table>
              <tbody>
                {arrcol.map((element) => {
                  return (
                    <tr key={element.id}>
                      <td>{element.name}</td>
                      <td>
                        <input id={element.id}></input>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className={styles.buttons}>
              <StandartBtn title="Поиск" func={seach} />
              <StandartBtn title="Отмена" func={funcClose} />
            </div>
          </div>
        </div>
      </dialog>
    </>,
    document.getElementById('modal')
  );
};

export default ModalSeach;
