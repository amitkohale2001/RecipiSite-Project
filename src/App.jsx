import {Routes,Route, BrowserRouter} from 'react-router-dom'
import Navbar from './Project Recipi/Navbar'
import Home from './Project Recipi/Home'
import Sp from './Project Recipi/Sp'
import Meals from './Project Recipi/Meals'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/Sp' element={<Sp/>} ></Route>
          <Route path='meals' element={<Meals/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
