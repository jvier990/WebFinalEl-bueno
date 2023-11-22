
import {Route,Routes} from "react-router-dom"


import Layout from './components/layout.jsx'
import Navbar from './components/navbar.jsx'
import Inicio from "./screens/inicio.jsx"
import Autos from "./screens/autos.jsx"

import Register from './screens/register.jsx'
import Image from './screens/images.jsx'
import Foot from "./components/foot.jsx"



function App() {


  return (
    <>
    <div className="bg-gradient-to-t from-pink-900 via-purple-900 to-indigo-950 min-h-screen ">
      <Navbar/>


      <Layout>
  
      <Routes>
        <Route path='/' element={<Inicio></Inicio>}></Route>
        <Route path='/autos' element={<Autos></Autos>}></Route>
        <Route path='/register' element={<Register></Register>}>

      
        </Route>
        </Routes>
     
      
      </Layout>
      
    </div>
    <Foot></Foot>
    </>
  )
}

export default App
