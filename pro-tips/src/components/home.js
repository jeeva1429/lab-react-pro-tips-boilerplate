 import React from 'react'
 import {NavLink, Route, Routes} from 'react-router-dom'
 import '../css/home.css'
 import Register from './register'
 function Home() {
   return (
     <div>
        <div className='nav'>

        <div className='home'> Kalvium</div>
        <div className='routes'>
            <div>Contacts </div>
          <NavLink to='/registration'> <div>Registration </div></NavLink> 
        </div>

<Routes>
    <Route path = '/registration' element = {<Register/>} />
</Routes>
        </div>
     </div>
   )
 }
 
 export default Home