import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Upload from './pages/upload';
import App from './App';

const routerconfig = createBrowserRouter([

  {
    path:'/',
    element:<App/>
  },
  {
    path: '/upload',
    element: <Upload />,
  },
]);

function Router() {
  return <RouterProvider router={routerconfig} />;
}

export default Router;
