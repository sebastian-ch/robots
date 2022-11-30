import logo from './assets/feb1.svg';
import logo2 from './assets/feb2.svg';
import logo3 from './assets/robo3.svg';
import logo4 from './assets/r1.svg';
import logo5 from './assets/r2.svg';
import logo6 from './assets/robot.svg';
import logo7 from './assets/robotCopy.svg';
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
      <div className='wrap'>
        <Item img={logo} />
        <Item img={logo2} />
        <Item img={logo3} />
        <Item img={logo4} />
        <Item img={logo5} />
        <Item img={logo6} />
        <Item img={logo7} />
        {/* <Robot color={blues} /> */}
      </div>
    </div>

  );
}

export default App;
