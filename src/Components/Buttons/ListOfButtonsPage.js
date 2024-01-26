const ListOfButtonsPage = (props) => {
  const { target, forward, back } = props;
  return (
    <div>
      <button>Вперед</button>
      <button>Назад</button>
    </div>
  );
};

export default ListOfButtonsPage;
