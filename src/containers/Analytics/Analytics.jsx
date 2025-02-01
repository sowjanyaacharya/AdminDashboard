import { Box, Tab, Tabs, Typography } from '@mui/material'
import TabPanel from '../../components/TabPanel';
import { useState } from 'react'
import OverviewCharts from './OverviewCharts';

const Analytics = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }
    return (
        <Box>
            <Typography sx={styles.pageTitle} variant='h5'>Analytics</Typography>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange}>
                    <Tab label='Overview' id='tab-0' />
                    <Tab label='Content' id='tab-1' />
                    <Tab label='Audience' id='tab-2' />
                    <Tab label='Revenue' id='tab-3' />
                </Tabs>
                <TabPanel value={value} index={0}>
                    <Box sx={styles.overviewContainer}>
                        <Box sx={styles.statsContainer}>
                            <Typography variant="h5">
                                Your Channel got 23,084 views in the last 28days</Typography>
                            <OverviewCharts />
                        </Box>

                    </Box>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Typography sx={styles.pageTitle} variant='h5'>Content</Typography>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <Typography sx={styles.pageTitle} variant='h5'>Audience</Typography>
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <Typography sx={styles.pageTitle} variant='h5'>Revenue</Typography>
                </TabPanel>
            </Box>
        </Box>
    )
}


export default Analytics

/** @type {import("@mui/material").SxProps} */
const styles = {
    pageTitle: {
        mb: 2,
    },
    videoColumn: {
        width: 120,
    },
    videoDetails: {
        ml: 2,
    },
    videoTitle: {
        fontSize: '0.8rem',
        width: 490,
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        '&:hover': {
            textDecoration: 'underline',
            cursor: 'pointer'
        },

    },
    videoDescription: {
        fontSize: '0.7rem',
        color: 'blue',
        width: 490,
        textOverflow: 'ellipsis',
        whitespace: 'nowrap',
        overflow: 'hidden'
    },
    videoThumbnail: {
        width: 120,
    },
    iconColumn: {
        display: 'flex',
        alignItems: 'center'
    },
    iconColumnText: {
        ml: 1,
        fontSize: '0.9rem'
    },

}
