import { useState } from 'react'
import './App.css'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import HeaderComponent from './components/HeaderComponent'
import 'bootstrap/dist/css/bootstrap.min.css';
import FooterComponent from './components/FooterComponent';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import AddEmployee from './components/AddEmployee';
import EmployeeComponent from './components/EmployeeComponent';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
        <HeaderComponent/>
        <Routes>
          <Route path='/' element = {<ListEmployeeComponent/>}></Route>
          <Route path='/employees' element = {<ListEmployeeComponent/>}></Route>
          <Route path='/add-employee' element = {<EmployeeComponent/>}></Route>
          <Route path='/edit-employee/:id' element = {<EmployeeComponent/>}></Route>
        </Routes>
        <FooterComponent/>
    </BrowserRouter>  
    </>
  )
}

export default App
