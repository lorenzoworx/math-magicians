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

const routes = Router(
  createRoutesFromElements(
    <Route path="/" element={<NavBar />}>
      <Route index element={<Home />} />
      <Route path="calculator" element={<Calculator />} />
      <Route path="quotes" element={<Quote />} />
    </Route>,
  ),
);

function App() {
  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
