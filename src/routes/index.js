import {  Route, Routes } from 'react-router-dom'

import Dashboard from '../pages/dashboard'
import Main from '../components/main'

const RoutesApp = () => {
    return (
        <div>

         <Routes>

            <Route path='/'  element={ <Main /> }> </Route>
            <Route path='/dashboard'  element={ <Dashboard /> } > </Route>
  
         </Routes>
    </div>

    )
}

export default RoutesApp