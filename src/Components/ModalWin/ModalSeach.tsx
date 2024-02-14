import React from 'react';
import { createPortal } from 'react-dom';
import { useEffect, useRef } from 'react';
import StandartBtn from '../Buttons/StandartBtn.tsx';
import styles from './Seach.module.css';

const ModalSeach = (props) => {
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
        <div className={styles.modal_content}>
          <div className={styles.modal_header}>
            <h3 className={styles.modal_title}>{settings.title}</h3>
          </div>
          <div className={styles.modal_body}>
            <table>
              <tbody>
                {settings.arrcol.map((element) => {
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
              <StandartBtn title="Поиск" func={settings.seach} />
              <StandartBtn title="Отмена" func={settings.funcClose} />
            </div>
          </div>
        </div>
      </dialog>
    </>,
    document.getElementById('modal')
  );
};

export default ModalSeach;
