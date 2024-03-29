import React from 'react'
import ReactDOM from 'react-dom/client'


import './index.css'








import AddProducts from './pages/AddProducts';
import Layout from './pages/Layout';
import Home from './pages/Home';
import MyCart from './pages/MyCart';
import AuthProvider from './Components/AuthProvider';
import ErrorPage from './pages/ErrorPage';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import Registration from './pages/Registration';
import AllProducts from './pages/AllProducts';
import ProductDetails from './pages/ProductDetails';
import Realme from './pages/Realme';
import Sony from './pages/Sony';
import Oneplush from './pages/Oneplush';
import Sumsung from './pages/Sumsung';
import Apple from './pages/Apple';
import Asus from './pages/Asus';
import UpdateProduct from './pages/UpdateProduct';
import PrivateRoute from './Components/PrivateRoute';




const router = createBrowserRouter([
  {
  path: "/",
  element: <Layout></Layout>,
  errorElement:<ErrorPage></ErrorPage>,
  children:[
    {
      path: "/",
      element:<Home></Home>
  },
  {
    path: "/AddProducts",
    element:<PrivateRoute><AddProducts></AddProducts></PrivateRoute>
}, 
{
  path: "/MyCart",
  element:<PrivateRoute><MyCart></MyCart></PrivateRoute>
},
{
  path: "/Registration",
  element:<Registration></Registration>
},
{
  path: "/Login",
  element:<Login></Login>
},
{
  path: "/AllProducts",
  element:<AllProducts></AllProducts>
},
{
  path: "/AllProducts",
  element:<AllProducts></AllProducts>
},
{
  path: "/ProductDetails/:_id",
  element:<PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>, 
  loader: ({params})=>fetch("https://zt-ech-backend-i7c5jj7n8-sheikh-mohammads-projects.vercel.app/AllProducts")
      
},
{
  path: "/Apple",
  element:<Apple></Apple>
},
{
  path: "/Sumsung",
  element:<Sumsung></Sumsung>
},
{
  path: "/Oneplush",
  element:<Oneplush></Oneplush>
},
{
  path: "/Sony",
  element:<Sony></Sony>
},
{
  path: "/Realme",
  element:<Realme></Realme>
},
{
  path: "/Asus",
  element:<Asus></Asus>
},
{
  path: "/UpdateProduct/:id",
  element:<PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
  loader: ({params})=>fetch(`https://zt-ech-backend-i7c5jj7n8-sheikh-mohammads-projects.vercel.app/AllProducts/${params.id}`)
},


 ],
},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
