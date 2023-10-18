import React from 'react';
import ListApplet from '../../ListApplets/ListApplet';

const ListOfGuide = () => {
  let dataList = [];
  dataList = [
    {
      element: 'Header',
      nameColumn: [
        { title: 'ФИО', id: 'fio' },
        { title: 'Телефон', id: 'tel' },
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
  return <ListApplet title="Список всех гидов" arrListColum={dataList} />;
};

export default ListOfGuide;
