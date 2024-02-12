import StandartBtn from '../Buttons/StandartBtn.tsx';
import styles from './FormAppletEdit.module.css';

const FormAppletEdit = (props) => {
  const { isEdit, changeActive } = props;
  return (
    <>
      <div className={isEdit ? styles.block_active : styles.block}>
        <div className={styles.block_content}>
          <StandartBtn title="Закрыть" onClick={changeActive} />
          <h2>Изменение записи</h2>
          <StandartBtn title="Отмена" />
          <StandartBtn title="Сохранить" />
        </div>
      </div>
    </>
  );
};

export default FormAppletEdit;
