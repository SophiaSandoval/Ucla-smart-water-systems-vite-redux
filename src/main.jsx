import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { setAssetPath } from "@esri/calcite-components/dist/components";

import './index.css'

setAssetPath("https://js.arcgis.com/calcite-components/1.2.0/assets");


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
