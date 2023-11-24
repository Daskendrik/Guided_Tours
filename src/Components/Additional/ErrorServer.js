import React, { useState } from 'react';

const ErrorServer = (props) => {
  const textError = props.textError;
  console.log(textError);
  return (
    <div className="error">
      Ошибка при обращении на сервер. Обратитесь к администратору, сообщите
      ошибку: <br></br>
      <b>{textError}</b>
    </div>
  );
};

export default ErrorServer;
