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
              <option value="ahorro">-- Saving Money --</option>
              <option value="comida">-- Food --</option>
              <option value="casa">-- Home --</option>
              <option value="ocio">-- Leisure --</option>
              <option value="salud">-- Health --</option>
              <option value="gastos">-- Miscellaneous expenses --</option>
              <option value="suscripciones">-- Suscriptions --</option>
          </select>
        </div>
      </form>
    </div>
  )
}

export default Filtros
