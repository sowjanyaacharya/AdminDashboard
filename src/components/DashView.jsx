import { Box, Card, CardContent, Typography } from '@mui/material'
import NorthEastIcon from '@mui/icons-material/NorthEast';
import MovingIcon from '@mui/icons-material/Moving';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

import React from 'react'

const DashView = ({ title, value, trend, change, bgColor }) => {
    return (
        <Card sx={{ display: 'flex', backgroundColor: bgColor, cursor: 'pointer', padding: 1, borderRadius: 2, flexDirection: { xs: 'column', sm: 'row' }, }}>
            <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <Typography variant="h6" sx={{ marginBottom: 3 }}>{title}</Typography>
                <Box sx={{ display: 'flex' }}>
                    <Typography variant="h6">{value}</Typography>
                    {trend === 'views' && (
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <RemoveRedEyeIcon fontSize='small' sx={{ color: 'purple', marginLeft: 15 }} />
                            <Typography variant="body2" sx={{ marginLeft: 0.5 }}>{change}%</Typography>
                        </Box>
                    )}
                    {trend === 'subscribes' && (
                        <Box sx={{ display: 'flex', alignItems: 'center', color: 'red', marginLeft: 15 }}>
                            <NorthEastIcon fontSize='small' />
                            <Typography variant="body2" sx={{ marginLeft: 0.5 }}>{change}%</Typography>
                        </Box>
                    )}
                    {trend === 'likes' && (
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <ThumbUpOffAltIcon fontSize='small' sx={{ color: 'gray', marginLeft: 15 }} />
                            <Typography variant="body2" sx={{ marginLeft: 0.5 }}>{change}%</Typography>
                        </Box>
                    )}
                    {trend === 'visits' && (
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <MovingIcon fontSize='small' sx={{ color: 'green', marginLeft: 15 }} />
                            <Typography variant="body2" sx={{ marginLeft: 0.5 }}>{change}%</Typography>
                        </Box>
                    )}
                </Box>

            </CardContent>
        </Card >
    )
}

export default DashView

/** @type {import("@mui/material").SxProps} */
const styles = {

}
