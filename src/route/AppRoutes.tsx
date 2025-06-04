import { Route, Routes } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import Home from '../pages/Home'
import AboutPage from '../pages/AboutPage'

function AppRoutes() {
  return (
    <Routes>
        <Route path='/' element={<MainLayout/>}>
            <Route path='/user' element={<Home/>} />
            <Route path='/user:id' element={<Home/>} />
            <Route path='/about' element={<AboutPage/>} />
        </Route>
    </Routes>
  )
}

export default AppRoutes