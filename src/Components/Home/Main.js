import React from 'react'
//Outlet is used to render content of nested routes(No matter on which page you are, Header and Footer will be there along content of respective page)
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from "./Footer"

const Main = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Main
