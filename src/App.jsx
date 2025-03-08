import React from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from './component/Layer/RootLayout';
import Home from './component/pages/Home';
import About from './component/pages/About';
import Shop from './component/pages/Shop';
import Journal from './component/pages/Journal';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/shop' element={<Shop/>}></Route>
      <Route path='/journal' element={<Journal/>}></Route>
    </Route>
  )
);

const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App