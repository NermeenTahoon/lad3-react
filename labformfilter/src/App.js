import './App.css';
import MyForm from './component/myForm';
import MyNav from './component/myNav'; 
import FilterList from './component/filterList';
import { Route,Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <MyNav />
    <Routes>
        <Route path="/" element={<MyForm/>} /> 
         <Route path="form" element={<MyForm/>} />
        <Route path="filter" element={<FilterList/>} />
    </Routes>
    </>
  );
}

export default App;
