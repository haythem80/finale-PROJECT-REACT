
import './App.css';
import ItemList from './Components/Itemslist';
import Navebare from './Components/Navebare';
import Section1 from './Components/Section1';
import Section2 from './Components/Section2';
import Slide from './Components/Slide';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useSelector } from 'react-redux';
import Information from './Components/Information';
import Login from './Components/Login';
import About from './Components/About';

function App() {
  const items  = useSelector((state) => state.items);
  return (
    
    <div className="App">
    <Router>
    <Navebare/>
    <Routes>
    
    <Route path = "/" element={
      <div>
    <Slide/>
    <Section1/>
    <Section2/>
    <ItemList/>
    <About/>
    </div>
    } />
        <Route path="/info/:id" element={<Information pes={items}/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/destination" element={<ItemList/>}/>
      </Routes>
      </Router>
    </div>
    
  );
}

export default App;
