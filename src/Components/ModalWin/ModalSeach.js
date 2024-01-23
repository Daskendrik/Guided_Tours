import StandartBtn from '../Buttons/StandartBtn';
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
  } = props;
  return (
    <>
      <div id="openModalSeach" className={styles.modal}>
        <div className={styles.modal_dialog}>
          <div className={styles.modal_content}>
            <div className={styles.modal_header}>
              <h3 className={styles.modal_title}>{title}</h3>
              <a href="#close" title="Close" className={styles.close}>
                Закрыть
              </a>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalSeach;
