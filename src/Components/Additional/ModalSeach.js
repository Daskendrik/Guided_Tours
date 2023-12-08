import StandartBtn from '../Buttons/StandartBtn';

const ModalSeach = (props) => {
  const {
    title = 'Поиск',
    table = 'table',
    arrcol = [
      { id: 'col1', name: 'Фамилия' },
      { id: 'col2', name: 'Телефон' },
    ],
  } = props;
  return (
    <>
      <div id="openModal" className="modal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title">{title}</h3>
              <a href="#close" title="Close" className="close">
                Закрыть
              </a>
            </div>
            <div className="modal-body">
              <table>
                <tbody>
                  {arrcol.map((element) => {
                    return (
                      <tr key={element.id}>
                        <td>{element.name}</td>
                        <td>
                          <input></input>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <StandartBtn title="Поиск" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalSeach;