import ListApplet from '../../ListApplets/ListApplet';

const ListOfBus = () => {
  let dataList = [];
  dataList = [
    {
      element: 'Header',
      nameColumn: [
        { title: 'Номер ТС', id: 'numTC' },
        { title: 'Фирма', id: 'firm' },
        { title: 'Телефон фирмы', id: 'firmTel' },
      ],
    },
    {
      element: 'Body',
      elements: [
        ['1234', '123', '123'],
        ['12345', '123', '123'],
        ['123567', '123', '123'],
        ['123567', '123', '123'],
        ['123567', '123', '123'],
        ['123567', '123', '123'],
        ['123567', '123', '123'],
        ['123567', '123', '123'],
      ],
    },
  ];
  return <ListApplet title="Список всех ТС" arrListColum={dataList} />;
};

export default ListOfBus;
