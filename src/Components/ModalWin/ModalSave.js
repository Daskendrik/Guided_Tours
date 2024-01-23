import StandartBtn from '../Buttons/StandartBtn';
import styles from './Save.module.css';

const ModalSave = (props) => {
  const { title = 'Сохранение', text = 'Сохранен', goBtn = [] } = props;

  return (
    <>
      <div id="openModalSave" className={styles.modal}>
        <div className={styles.modal_dialog}>
          <div className={styles.modal_content}>
            <div className={styles.modal_header}>
              <h3 className={styles.modal_title}>{title}</h3>
              <a href="#close" title="Close" className={styles.close}>
                Закрыть
              </a>
            </div>
            <div className={styles.modal_body}>
              <h4>{text}</h4>
              <div className={styles.buttons}>
                <StandartBtn title="Вернуться на список" link={goBtn[0]} />
                <StandartBtn title="Перейти в Карточку" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalSave;
