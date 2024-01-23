import StandartBtn from '../Buttons/StandartBtn';
import styles from './Error.module.css';

const ModalError = (props) => {
  const {
    title = 'Ошибка',
    doing = 'Констакт',
    func = () => {
      console.log('удаление');
    },
    err = 'Текст ошибки',
  } = props;

  return (
    <>
      <div id="openModalError" className={styles.modal}>
        <div className={styles.modal_dialog}>
          <div className={styles.modal_content}>
            <div className={styles.modal_header}>
              <h3 className={styles.modal_title}>{title}</h3>
              <a href="#close" title="Close" className={styles.close}>
                Закрыть
              </a>
            </div>
            <div className="modal-body">
              <p>
                Ошибка при {doing}. <br></br>Повторите позже или обратитесь к
                администратору. <br></br>Текст ошибки:<br></br>{' '}
                <span className={styles.err_text}>{err}</span>
              </p>
              <div className={styles.buttons}>
                <StandartBtn title="Ок" func={func} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalError;
