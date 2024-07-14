import logo from './logo.svg';
import './App.css';
import Product from './components/Product'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Dashboard from './components/Dashboard';
import Cart from './components/Cart'
import RootLayout from './components/RootLayout';

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <Route path="/" element ={<RootLayout />}>                                // 1st route is used to for the index that is to show the dashboard
      <Route index element={<Dashboard />}></Route>                 //this 2nd route will show the cards
      <Route path="/cart" element={<Cart />}></Route>
    </Route>
  ))

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
