'use strict';

const Header = () => {
  let [testText, setTestText] = React.useState('Click');
  const test = () => setTestText('Cliiiiiiiiiiiiiiiiiiiiiiiiick');
  return <button onClick={test}>{testText}</button>;
};

const container = document.getElementById('header-root');
const root = ReactDOM.createRoot(container);
root.render(<Header />);
