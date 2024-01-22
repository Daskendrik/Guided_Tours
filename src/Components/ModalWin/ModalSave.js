import StandartBtn from '../Buttons/StandartBtn';

const ModalSave = (props) => {
  const { title = 'Сохранение', text = 'Сохранен', goBtn = [] } = props;

  return (
    <>
      <div id="openModalSave" className="modal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title">{title}</h3>
              <a href="#close" title="Close" className="close">
                Закрыть
              </a>
            </div>
            <div className="modal-body">
              <h4>{text}</h4>
              <StandartBtn title="Вернуться на список" link={goBtn[0]} />
              <StandartBtn title="Перейти в Карточку" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalSave;
