import StandartBtn from '../Buttons/StandartBtn';
import styles from './Delete.module.css';

const ModalDelete = (props) => {
  const {
    title = 'Удаление',
    component = 'Констакт',
    id = '000',
    name = 'ТестУдалить',
    func = () => {
      console.log('удаление');
    },
  } = props;

  return (
    <>
      <div id="openModalDelete" className={styles.modal}>
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
                Вы уверены, что надо удалить {component}:<br></br> ФИО = {name}
              </p>
              <div className={styles.buttons}>
                <StandartBtn title="Да" func={func} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalDelete;
