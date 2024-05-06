import {HomeComponent} from "./components/homeComponent"
import {BudgetComponent} from "./components/budgetComponent"
import {ClientComponent} from "./components/clientsComponent"
import {UserComponent} from "./components/userComponent"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeComponent/>} />
        <Route path="/client" element={<ClientComponent/>}/>
        <Route path="/budget" element={<BudgetComponent/>}/>
        <Route path="/user" element={<UserComponent/>}/>
        {/* <Route path="" element={</>}/> */}
    
      </Routes>
    </BrowserRouter>
  )
}

export default App
