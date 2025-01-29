import React from 'react'
import Dashboard from '../containers/Dashboard/Dashboard'
import Contents from '../containers/Contents/Contents'
import Analytics from '../containers/Analytics/Analytics'
import Customization from '../containers/Customization/Customization'
import { Routes, Route } from 'react-router-dom'
const AppRoutes = () => {
    return (
        <Routes>
            {/* these are the browser url */}
            <Route path='/' element={<Dashboard />} />
            <Route path='/contents' element={<Contents />} />
            <Route path='/analytics' element={<Analytics />} />
            <Route path='/customization' element={<Customization />} />
        </Routes>
    )
}

export default AppRoutes
