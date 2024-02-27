import React from 'react';
import { useForm } from 'react-hook-form';
import { IContact } from '../../../../Types/Contact';
import styles from './Styles.module.css';

const NewContact = () => {
  const { register } = useForm<IContact>();

  return (
    <>
      <div className={styles.container}>
        <div className={styles.form_applet}>
          <form>
            <div className={styles.row}>
              <div className={styles.field}>
                <label>
                  <span>Фамилия</span>
                </label>
                <input {...register('last_name')}></input>
              </div>
              <div className={styles.field}>
                <label>Имя</label>
                <input {...register('first_name')}></input>
              </div>
              <div className={styles.field}>
                <label>Отчество</label>
                <input {...register('middle_name')}></input>
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.field}>
                <label>Почта</label>
                <input {...register('email')}></input>
              </div>
              <div className={styles.field}>
                <label>Телефон</label>
                <input {...register('tel')}></input>
              </div>
              <div className={styles.field}>
                <label>Тип</label>
                <input {...register('type_code')}></input>
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.field}>
                <label>Комментарий</label>
                <input {...register('comment')}></input>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default NewContact;
