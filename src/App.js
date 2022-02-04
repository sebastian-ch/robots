import logo from './assets/feb1.svg';
import logo2 from './assets/feb2.svg';
import logo3 from './assets/robo3.svg';
//import logo4 from './assets/feb11.svg';

import Robot from './Robot'
import Item from './Item';
import Footer from './Footer'
import './App.css';

function App() {
  const blues = ['#0000FF', '#00FFFF']
  return (
    <div className="App">
      <h1>R O B O T S</h1>
      <h5>Sebastian Hancock</h5>
      <Item img={logo} />
      <Item img={logo2} />
      <Item img={logo3} />
      {/* <Robot color={blues} /> */}

    </div>

  );
}

export default App;
