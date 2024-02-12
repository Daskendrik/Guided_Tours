import ListApplet from '../../ListApplets/ListApplet.tsx';

const ListOfMuseum = () => {
  let dataList = [];
  dataList = [
    {
      element: 'Header',
      nameColumn: [
        { title: 'Название', id: 'name' },
        { title: 'Город', id: 'city' },
        { title: 'Телефон', id: 'tel' },
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
  return <ListApplet title="Список всех музеев" arrListColum={dataList} />;
};

export default ListOfMuseum;
