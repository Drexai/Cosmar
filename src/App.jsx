import {HomeComponent} from "./components/homeComponent"
import {BudgetComponent} from "./components/budgetComponent"
import {ClientComponent} from "./components/clientsComponent"
import {UserComponent} from "./components/userComponent"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'


//We will use at first the HomeComponent as the index and then we will pass for the LoginComponent as the index
function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomeComponent/>}/>
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
