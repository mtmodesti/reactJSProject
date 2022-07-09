import {  Route, Routes } from 'react-router-dom'
import App from '../App'
import Dashboard from '../pages/dashboard'

const Router = () => {
    return (

        <Routes>

            <Route exact path='/'>
                <App />
            </Route>

            <Route path='/dashboard'>
                <Dashboard />
            </Route>

        </Routes>

    )
}

export default Router