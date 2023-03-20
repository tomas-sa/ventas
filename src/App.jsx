import './App.css'
import Cards from './components/Cards'
import Nav from './components/Nav'
import Cart from './components/Cart'
import Hero from './components/Hero'
import { DataProvider } from './context/DataContext'
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {


  return (
    <DataProvider>
      <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path='/' element={<Hero />}/>
          <Route path='/products' element={<Cards />}/>
          <Route path='/cart' element={<Cart />}/>
        </Routes>
      </div>
      </BrowserRouter>
    </DataProvider>
  )
}

export default App
