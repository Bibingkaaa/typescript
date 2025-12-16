//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, Navigate} from "react-router-dom";
import UseProps from "./components/UseProps";
import { MainPageLayout } from './MainPage';

const App = () => {
  return (
   <Routes>
      <Route path="/" element={<MainPageLayout />}>
        <Route index element={<Navigate to="section-one" replace />} />
        <Route path="section-one" element={<UseProps />} />
        
      </Route>
    </Routes>
  )
}

export default App
