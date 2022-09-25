import { useState, useEffect } from "react";

import React from 'react'

const Filtros = ({filtro, setFiltro}) => {


  return (
    <div className="filtros">
      <form>
        <div className="campo">
          <label>Filter Expenses</label>
          <select
          value={filtro}
          onChange={e => setFiltro(e.target.value)}
          >
               <option value="">-- All Categories --</option>
              <option value="Saving">-- Saving --</option>
              <option value="Food">-- Food --</option>
              <option value="Home">-- Home --</option>
              <option value="Leisure">-- Leisure --</option>
              <option value="Health">-- Health --</option>
              <option value="Miscellaneous expenses">-- Miscellaneous expenses --</option>
              <option value="Suscriptions">-- Suscriptions --</option>
          </select>
        </div>
      </form>
    </div>
  )
}

export default Filtros
