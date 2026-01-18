import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Upload from './pages/upload';
import App from './App';
import View from './pages/View';

const routerconfig = createBrowserRouter([

  {
    path:'/',
    element:<App/>
  },
  {
    path: '/upload',
    element: <Upload />,
  },
  {
    path:"/view",
    element:<View/>
  }
]);

function Router() {
  return <RouterProvider router={routerconfig} />;
}

export default Router;
