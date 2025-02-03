import React from 'react'
import Dashboard from '../containers/Dashboard/Dashboard'
import Contents from '../containers/Contents/Contents'
import Analytics from '../containers/Analytics/Analytics'
import { Routes, Route } from 'react-router-dom'
import CreateChannel from '../containers/Channel/CreateChannel'
import ChannelList from '../containers/Channel/ChannelList'
const AppRoutes = () => {
    return (
        <Routes>
            {/* these are the browser url */}
            <Route path='/' element={<Dashboard />} />
            <Route path='/contents' element={<Contents />} />
            <Route path='/analytics' element={<Analytics />} />
            <Route path='/createchannel' element={<CreateChannel />} />
            <Route path='/channellist' element={<ChannelList />} />
        </Routes>
    )
}

export default AppRoutes
