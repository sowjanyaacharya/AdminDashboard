import { Box, Tab, Tabs, Typography } from '@mui/material'
import { useState } from 'react'
import TabPanel from '../../components/TabPanel';
import { DataGrid } from "@mui/x-data-grid"
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined'

const columns = [
    {
        field: 'thumbnail',
        headerName: 'Video',
        minWidth: 500,
        flex: 4,
        renderCell: (params) => <Box sx={styles.videoColumn}>
            <Box component={'img'} sx={styles.videoThumbnail} src={params.row.thumbnail} />
            <Box sx={styles.videoDetails}>
                <Typography sx={styles.videoTitle}>Must Know Python Questions | Part 1</Typography>
                <Typography sx={styles.videoDescription}>In this video Tutorial you will learn Python Code</Typography>
            </Box>

        </Box>
    },
    {
        field: 'visibility',
        headerName: 'Live',
        minWidth: 170,
        flex: 2,
        renderCell: (params) => <Box sx={styles.iconColumn}>
            <VisibilityOutlinedIcon />
            <Typography sx={styles.iconColumnText}>{params.row.visibility}</Typography>

        </Box>

    },
    {
        field: 'monitorization',
        headerName: 'Monitorization',
        minWidth: 170,
        flex: 2,
        renderCell: (params) => <Box sx={styles.iconColumn}>
            <AttachMoneyOutlinedIcon />
            <Typography sx={styles.iconColumnText}>{params.row.monitorization}</Typography>
        </Box>

    },
    {
        field: 'views',
        headerName: 'Views',
        minWidth: 170,
        flex: 2
    }
]

const videos = [
    { id: 1, thumbnail: 'IMAGE', visibility: 'Public', monitorization: 'On', views: 100, comments: 12 },
    { id: 2, thumbnail: 'IMAGE', visibility: 'Public', monitorization: 'On', views: 100, comments: 12 },
    { id: 3, thumbnail: 'IMAGE', visibility: 'Public', monitorization: 'On', views: 100, comments: 12 },
    { id: 4, thumbnail: 'IMAGE', visibility: 'Public', monitorization: 'On', views: 100, comments: 12 },
    { id: 5, thumbnail: 'IMAGE', visibility: 'Public', monitorization: 'On', views: 100, comments: 12 },
    { id: 6, thumbnail: 'IMAGE', visibility: 'Public', monitorization: 'On', views: 100, comments: 12 },
    { id: 7, thumbnail: 'IMAGE', visibility: 'Public', monitorization: 'On', views: 100, comments: 12 },
    { id: 8, thumbnail: 'IMAGE', visibility: 'Public', monitorization: 'On', views: 100, comments: 12 },
    { id: 9, thumbnail: 'IMAGE', visibility: 'Public', monitorization: 'On', views: 100, comments: 12 },
    { id: 10, thumbnail: 'IMAGE', visibility: 'Public', monitorization: 'On', views: 100, comments: 12 },
    { id: 11, thumbnail: 'IMAGE', visibility: 'Public', monitorization: 'On', views: 100, comments: 12 },
    { id: 12, thumbnail: 'IMAGE', visibility: 'Public', monitorization: 'On', views: 100, comments: 12 },
    { id: 13, thumbnail: 'IMAGE', visibility: 'Public', monitorization: 'On', views: 100, comments: 12 },
    { id: 14, thumbnail: 'IMAGE', visibility: 'Public', monitorization: 'On', views: 100, comments: 12 },
    { id: 15, thumbnail: 'IMAGE', visibility: 'Public', monitorization: 'On', views: 100, comments: 12 },
    { id: 16, thumbnail: 'IMAGE', visibility: 'Public', monitorization: 'On', views: 100, comments: 12 },
    { id: 17, thumbnail: 'IMAGE', visibility: 'Public', monitorization: 'On', views: 100, comments: 12 },
    { id: 18, thumbnail: 'IMAGE', visibility: 'Public', monitorization: 'On', views: 100, comments: 12 },
    { id: 19, thumbnail: 'IMAGE', visibility: 'Public', monitorization: 'On', views: 100, comments: 12 },
    { id: 20, thumbnail: 'IMAGE', visibility: 'Public', monitorization: 'On', views: 100, comments: 12 },
    { id: 21, thumbnail: 'IMAGE', visibility: 'Public', monitorization: 'On', views: 100, comments: 12 },
    { id: 22, thumbnail: 'IMAGE', visibility: 'Public', monitorization: 'On', views: 100, comments: 12 },
    { id: 23, thumbnail: 'IMAGE', visibility: 'Public', monitorization: 'On', views: 100, comments: 12 },
    { id: 24, thumbnail: 'IMAGE', visibility: 'Public', monitorization: 'On', views: 100, comments: 12 },
    { id: 25, thumbnail: 'IMAGE', visibility: 'Public', monitorization: 'On', views: 100, comments: 12 },
    { id: 26, thumbnail: 'IMAGE', visibility: 'Public', monitorization: 'On', views: 100, comments: 12 },
    { id: 27, thumbnail: 'IMAGE', visibility: 'Public', monitorization: 'On', views: 100, comments: 12 },
    { id: 28, thumbnail: 'IMAGE', visibility: 'Public', monitorization: 'On', views: 100, comments: 12 },
];

const posts = [
    { id: 1, thumbnail: 'IMAGE', visibility: 'Public', monitorization: 'On', views: 100, comments: 12 },
    { id: 2, thumbnail: 'IMAGE', visibility: 'Public', monitorization: 'On', views: 100, comments: 12 },
    { id: 3, thumbnail: 'IMAGE', visibility: 'Public', monitorization: 'On', views: 100, comments: 12 }
];

const playlists = [
    { id: 1, thumbnail: 'IMAGE', visibility: 'Public', monitorization: 'On', views: 100, comments: 12 },
]

const lives = [

];

const Contents = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }
    return (
        <Box>
            <Typography sx={styles.pageTitle} variant='h5'>Contents</Typography>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange}>
                    <Tab label='Videos' id='tab-0' />
                    <Tab label='Live' id='tab-1' />
                    <Tab label='Posts' id='tab-2' />
                    <Tab label='Playlists' id='tab-3' />
                </Tabs>
                <TabPanel value={value} index={0}>
                    <DataGrid rows={videos} columns={columns} pagination pageSize={5} rowsPerPageOptions={[5]} checkboxSelection rowHeight={70} />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <DataGrid rows={lives} columns={columns} pagination pageSize={5} rowsPerPageOptions={[5]} checkboxSelection rowHeight={70} />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <DataGrid rows={posts} columns={columns} pagination pageSize={5} rowsPerPageOptions={[5]} checkboxSelection rowHeight={70} />
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <DataGrid rows={playlists} columns={columns} pagination pageSize={5} rowsPerPageOptions={[5]} checkboxSelection krowHeight={70} />
                </TabPanel>
            </Box>
        </Box>
    )
}

export default Contents

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
