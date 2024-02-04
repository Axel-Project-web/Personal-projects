//Pages
import Login from '../pages/Login/Login';
import Home from '../pages/Home/Home';
import SingUp from '../pages/SingUp/SingUp';
import Bloc, { loadDataUser } from '../pages/Bloc/Bloc';

//loaders
import { getToken } from '../pages/Login/Login';

//react-router-dom
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
    {
      path: '/',
      errorElement: <h1>Oops... :(</h1>,
      element: <Home />,
    },
    {
      path: '/login',
      element: <Login />,
      loader: getToken,
    },
    {
      path: '/singup',
      element: <SingUp />,
    },
    {
      path: '/bloc',
      element: <Bloc />,
      loader: loadDataUser,
    },
  ]);

export default function RouterApp() {
  return <RouterProvider router = {router}/>
}