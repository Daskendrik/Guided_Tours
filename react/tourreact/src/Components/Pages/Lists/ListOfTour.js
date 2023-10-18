import ListApplet from '../../ListApplets/ListApplet';

const ListOfTour = () => {
  let dataList = [];
  dataList = [
    {
      element: 'Header',
      nameColumn: [
        { title: 'Название', id: 'name' },
        { title: 'Дата', id: 'date' },
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
  return <ListApplet title="Список всех туров" arrListColum={dataList} />;
};

export default ListOfTour;
