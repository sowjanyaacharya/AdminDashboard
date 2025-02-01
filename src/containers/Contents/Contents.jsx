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
        flex: 2,
        editable: true,
        renderCell: (params) => <Box>
            <Typography sx={styles.videoTitle}>{params.row.thumbnail}</Typography>
        </Box>
    },
    {
        field: 'visibility',
        headerName: 'Live',
        minWidth: 170,
        flex: 2,
        editable: true,
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
        flex: 2,
        renderCell: (params) => <Box>
            <Typography sx={styles.videoTitle}>{params.row.views}</Typography>
        </Box>
    }
]

const videos = [
    { id: 1, thumbnail: 'Must Know Python Questions | Part 1', visibility: 'Public', monitorization: 'On', views: '1k' },
    { id: 2, thumbnail: 'Must Know Python Questions | Part 2', visibility: 'Public', monitorization: 'On', views: '2k' },
    { id: 3, thumbnail: 'Must Know Python Questions | Part 3', visibility: 'Public', monitorization: 'On', views: '1k' },
    { id: 4, thumbnail: 'Must Know Python Questions | Part 4', visibility: 'Public', monitorization: 'On', views: '250' },
    { id: 5, thumbnail: 'Must Know Python Questions | Part 5', visibility: 'Public', monitorization: 'On', views: '240' },
    { id: 6, thumbnail: 'Must Know Python Questions | Part 6', visibility: 'Public', monitorization: 'On', views: '240' },
    { id: 7, thumbnail: 'Must Know Python Questions | Part 7', visibility: 'Public', monitorization: 'On', views: '100' },
    { id: 8, thumbnail: 'Must Know Python Questions | Part 8', visibility: 'Public', monitorization: 'On', views: '200' },
    { id: 9, thumbnail: 'Must Know Python Questions | Part 9', visibility: 'Public', monitorization: 'On', views: '300' },
    { id: 10, thumbnail: 'Must Know Python Questions | Part 10', visibility: 'Public', monitorization: 'On', views: '400' },
];

const posts = [
    { id: 1, thumbnail: 'Must Know Python Questions | Part 1', visibility: 'Public', monitorization: 'On', views: '100' },
    { id: 2, thumbnail: 'Must Know Python Questions | Part 2', visibility: 'Public', monitorization: 'On', views: '200' },
    { id: 3, thumbnail: 'Must Know Python Questions | Part 3', visibility: 'Public', monitorization: 'On', views: '300' }
];

const playlists = [
    { id: 1, thumbnail: 'Must Know Python Questions | Part 1', visibility: 'Public', monitorization: 'On', views: '100' },
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
                    {/*<DataGrid rows={videos} columns={columns} pagination pageSize={5} rowsPerPageOptions={[5]} checkboxSelection rowHeight={70} />*/}
                    <DataGrid rows={videos} columns={columns} initialState={{
                        pagination: { paginationModel: { pageSize: 5, }, },
                    }} pageSizeOptions={[5, 10, 15]} checkboxSelection disableRowSelectionOnClick />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <DataGrid rows={lives} columns={columns} initialState={{
                        pagination: { paginationModel: { pageSize: 5, }, },
                    }} pageSizeOptions={[5, 10, 15]} checkboxSelection disableRowSelectionOnClick />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <DataGrid rows={posts} columns={columns} initialState={{
                        pagination: { paginationModel: { pageSize: 5, }, },
                    }} pageSizeOptions={[5, 10, 15]} checkboxSelection disableRowSelectionOnClick />
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <DataGrid rows={playlists} columns={columns} initialState={{
                        pagination: { paginationModel: { pageSize: 5, }, },
                    }} pageSizeOptions={[5, 10, 15]} checkboxSelection disableRowSelectionOnClick />
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
    iconColumn: {
        display: 'flex',
        alignItems: 'center'
    },
    iconColumnText: {
        ml: 1,
        fontSize: '0.9rem'
    },

}
