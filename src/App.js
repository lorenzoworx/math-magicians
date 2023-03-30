import {
  createBrowserRouter as Router,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Calculator from './components/calculator';
import Home from './components/Home';
import Quotes from './components/Quotes';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <Calculator />
    </div>
  );
}

export default App;
