import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import { BrowserRouter } from 'react-router-dom'
import "./LandingPage.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        < Route path="/"
          element={<App />} />

        <Route path="Landing"
          element={<LandingPage />} />

      </Routes>


    </BrowserRouter>
  </React.StrictMode>
)
