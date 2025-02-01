import { Box, Card, CardContent, Typography } from '@mui/material'
import React from 'react'

const DashView = ({ title, value }) => {
    return (
        <Card sx={styles.cards}>
            <CardContent sx={{ flex: 1 }}>
                <Box sx={styles.postAuthorSection}>
                    <Typography variant="h5">{title}</Typography>
                    <Typography variant="h7">{value}</Typography>
                </Box>
            </CardContent>
        </Card>
    )
}

export default DashView

/** @type {import("@mui/material").SxProps} */
const styles = {
    cards: {
        display: 'flex',
        backgroundColor: '#e0f7fa',

    },
    postAuthorSection: {
        display: 'flex',
        alignItems: 'center',

    },
}
