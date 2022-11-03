import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import router from './Router/Routes/Routes';

function App() {

  

  return (
    <div className='max-w-screen-xl mx-auto' data-theme="cupcake">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
