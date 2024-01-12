import StandartBtn from '../Buttons/StandartBtn';

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
      <div id="openModalDelete" className="modal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title">{title}</h3>
              <a href="#close" title="Close" className="close">
                Закрыть
              </a>
            </div>
            <div className="modal-body">
              <h4>
                Вы уверены, что надо удалить {component}: <br></br>id = {id},{' '}
                <br></br> ФИО = {name}
              </h4>
              <StandartBtn title="Да" func={func} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalDelete;
