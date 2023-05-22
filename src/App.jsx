// import { Button } from 'bootstrap';
import './App.css';
// import InputComponent from './components/InputComponent';
 import NavConponent from './components/NavComponent';

 import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'

import $ from 'jquery';
import Popper from 'popper.js';
import Container from './components/Container';
import Home from './pages/home';
import { BrowserRouter , Routes, Switch, Route} from 'react-router-dom';
import { useEffect, useState } from 'react';




const App = () => {


  return (
    <div className='App'>
      <div>
      <div className="white-gradient"/>
      <BrowserRouter>
      
     <NavConponent/>
    <Routes>
     
    <Route index element = {<Home/>}/>
    <Route path = 'about/' index element = {<Container/>}/>
    <Route path = '*' element ={
      <div><h1>Error</h1></div>
    }/>

    
    </Routes>
    </BrowserRouter>
    </div>
    </div>
    
  )

  // const [data, setData] = useState([])
  // const fetchData = async () =>{
  //   const data = await fetch("https://jsonplaceholder.typicode.com/photos")
  //   const jsonData = await data.json()
  //   setData (jsonData)
  // }
  // useEffect(() =>{
  //   fetchData()
  // }, [])

  //   return <div>
      
  //     <h1>Data</h1> 
  //     {!data.length && <p>loading....</p>}
  //     {
  //       data.map((res, index) => {
  //         return <p>{res.title}</p>
  //       })
  //     }
  //   </div>
  // return (<div >
  
  //   {/* < Container/> */}
  //   < Home/>
  // </div>)
  // ;

};

export default App;