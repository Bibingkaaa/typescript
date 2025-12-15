//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, Navigate } from "react-router-dom";
import UseProps from "./components/UseProps";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<UseProps />} />
      <Route path="/products" element={<Navigate to="/" replace />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
