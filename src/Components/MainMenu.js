import ButtonMenu from './Buttons/ButtonsMenu';

function MainMenu() {
  const pages = [
    ['Главная', 'http:yandex.ru'],
    ['Туры', 'http:yandex.ru'],
  ];

  return (
    <div>
      <h1>NENU</h1>
      <ButtonMenu tittle={pages.at(0).at(0)} link={pages.at(0).at(1)} />
    </div>
  );
}

export default MainMenu;
