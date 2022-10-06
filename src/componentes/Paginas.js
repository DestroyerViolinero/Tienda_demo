import React from 'react'
import { Inicio } from "./Inicio";
import { ProductosLista } from "./Productos/index";
import { Route, Routes } from "react-router-dom";
import { ProductoDetalle } from "./Productos/ProductoDetalle";


export const Paginas = () => {
  return (
    <>
    <section>
      <Routes>
        <Route path='/' element={<Inicio/>}></Route>
        <Route path='/productos' element={<ProductosLista/>}></Route>
        <Route path='/producto/:id' element={<ProductoDetalle/>}></Route>
      </Routes>

    </section>
    </>
  )
}
