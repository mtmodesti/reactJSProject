import {  Route, Routes } from 'react-router-dom'

import Dashboard from '../pages/register'
import Main from '../components/main'

const RoutesApp = () => {
    return (
        <div>

         <Routes>

            <Route path='/'  element={ <Main /> }> </Route>
            <Route path='/register'  element={ <Dashboard /> } > </Route>
  
         </Routes>
    </div>

    )
}

export default RoutesApp