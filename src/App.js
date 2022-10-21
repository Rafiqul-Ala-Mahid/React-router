import './App.css';
import Header from './Components/Header/Header';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Components/Layout/Main/Main';
import Home from './Components/Home/Home';
import Tutorial from './Components/Tutorial/Tutorial';
import Blog from './Components/Blog/Blog';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Home></Home>
        },
        {
          path: 'tutorial',
          element:<Tutorial></Tutorial>
        },
        {
          path: 'blog',
          element:<Blog></Blog>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
