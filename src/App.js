import {
  createBrowserRouter as Router,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Calculator from './components/calculator';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Quote from './components/calcQuote';

function App() {
  return (
    <div className="App">
      <Quote />
      <Calculator />
    </div>
  );
}

export default App;
