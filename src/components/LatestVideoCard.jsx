import { Box, Card, CardContent, Typography } from '@mui/material'
import React from 'react'
import recursionImage from '../assets/recursion.png'
//Here props are passed to apply the styles
const LatestVideoCard = (props) => {
    return (
        <Card {...props}>
            <CardContent>
                <Typography variant='cardTitle'>Latest Video Performance</Typography>
                <Box sx={styles.latestVideoContainer}>
                    <Box sx={styles.latestVideoThumbNail} ><img src={recursionImage} /></Box>
                    <Typography sx={styles.latestVideoTitle}>Factorial Of Number</Typography>

                </Box>
                <Typography variant="h7" sx={styles.latestVideoTimeLabel}>First 5 Mins:</Typography>
                <Box sx={styles.latestVideoStatsRow}>
                    <Typography variant="h7">Views</Typography>
                    <Typography variant="h7">225</Typography>
                </Box>
                <Box sx={styles.latestVideoStatsRow}>
                    <Typography variant="h7">Watch Time</Typography>
                    <Typography variant="h7">30</Typography>
                </Box>
                <Box sx={styles.latestVideoStatsRow}>
                    <Typography variant="h7">Likes</Typography>
                    <Typography variant="h7">23</Typography>
                </Box>
                <Typography sx={styles.cardAction} variant='link'>GO TO VIDEO ANALYTICS</Typography>
                <Typography sx={styles.cardAction} variant='link'>SEE COMMENTS(3)</Typography>
            </CardContent>
        </Card>
    )
}

export default LatestVideoCard

/** @type {import("@mui/material").SxProps} */
const styles = {
    latestVideoContainer: {
        width: '100%',
        position: 'relative'
    },
    latestVideoThumbNail: {
        width: '100%',
        mt: 1,
        filter: 'brightness(20%)',
        display: 'block',
    },
    latestVideoTitle: {
        position: 'absolute',
        bottom: 0,
        color: 'neutral.light',
        left: 0,
        right: 120,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '1rem',
    },
    latestVideoTimeLabel: {
        color: 'neutral.normal',
        mt: 2,
    },
    latestVideoStatsRow: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    cardAction: {
        mt: 2,
    }

}
