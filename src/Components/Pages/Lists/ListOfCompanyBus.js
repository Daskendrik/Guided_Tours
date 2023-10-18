import ListApplet from '../../ListApplets/ListApplet';

const ListOfCompanyBus = () => {
  let dataList = [];
  dataList = [
    {
      element: 'Header',
      nameColumn: [
        { title: 'Название', id: 'name' },
        { title: 'Телефон фирмы', id: 'firmTel' },
      ],
    },
    {
      element: 'Body',
      elements: [
        ['1234', '123'],
        ['12345', '123'],
        ['123567', '123'],
        ['123567', '123'],
        ['123567', '123'],
        ['123567', '123'],
        ['123567', '123'],
        ['123567', '123'],
      ],
    },
  ];
  return (
    <ListApplet title="Список всех транспортных фирм" arrListColum={dataList} />
  );
};

export default ListOfCompanyBus;
