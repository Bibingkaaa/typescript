//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, Navigate} from "react-router-dom";
import ProductList from "./components/ProductList";
import LiveTextMirror from './components/LiveTextMirror';
import UseEffect from './components/UseEffect';
import { MainPageLayout } from './MainPage';

const App = () => {
  return (
   <Routes>
      <Route path="/" element={<MainPageLayout />}>
        <Route index element={<Navigate to="section-one" replace />} />
        <Route path="section-one" element={<ProductList />} />
        <Route path="section-two" element={<LiveTextMirror />} />
         <Route path="section-three" element={<UseEffect />} />
      </Route>
    </Routes>
  )
}

export default App
