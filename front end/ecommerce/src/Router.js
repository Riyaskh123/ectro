import { useState, useEffect } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import Main from './pages/Main';
import ProductList from './pages/products/ProductList';
import About from './pages/About'
import Contact from './pages/contact'
import ProductDetail from './pages/productDetails/ProductDetail';

// ----------------------------------------------------------------------

export default function Router() {;
  let route = [
      {
        path: '/',
        element: <Main />,
      },
      {
        path: '/products',
        element: <ProductList />,
      },
      {
        path: '/products/:name',
        element: <ProductDetail />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      { path: '*', element: <center><h3 color="red">ERROR</h3></center> }
    ];
  return useRoutes(route);
}