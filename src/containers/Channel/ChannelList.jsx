import { useState } from 'react'
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Dialog, DialogTitle, DialogContent, Button, Typography } from '@mui/material'
import { Edit, Delete, VisibilityOutlined } from '@mui/icons-material'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function createData(channelName, channelDescription, channelCategory) {
    return { channelName, channelDescription, channelCategory }
}

const rows = [
    createData('channel1', 'It is the no 1 channel', 'Journal'),
    createData('channel2', 'It is the no 2 channel', 'Exploring'),
    createData('channel3', 'It is the no 3 channel', 'News'),
    createData('channel4', 'It is the no 4 channel', 'Journal')
]
const ChannelList = () => {

    const [open, setOpen] = useState(false)
    const [selectedChannel, setSelectedChannel] = useState(null)

    const handleView = (channel) => {
        setSelectedChannel(channel)
        setOpen(true)

    }

    const handleClose = () => {
        setOpen(false)
        setSelectedChannel(null)
    }

    const handleEdit = (channel) => {
        toast.error("Sorry Can't Edit");
    }

    const handleDelete = (channel) => {
        toast.error("Sorry Can't Delete");
    }
    return (
        <>
            <Box >Channel List</Box>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label='simple-channeltable'>
                    <TableHead sx={{ backgroundColor: 'primary.main' }}>
                        <TableRow>
                            <TableCell>Channel Name</TableCell>
                            <TableCell>Channel Description</TableCell>
                            <TableCell>Channel Category</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, index) => (
                            <TableRow key={row.channelName} sx={{ backgroundColor: index % 2 === 0 ? 'light' : 'secondary.light' }}>
                                <TableCell align='left'>{row.channelName}</TableCell>
                                <TableCell align='left'>{row.channelDescription}</TableCell>
                                <TableCell align='left'>{row.channelCategory}</TableCell>
                                <TableCell>
                                    <IconButton color='primary' onClick={() => handleEdit(row)}>
                                        <Edit />
                                    </IconButton>
                                    <IconButton color='error' onClick={() => handleDelete(row)}>
                                        <Delete />
                                    </IconButton>
                                    <IconButton color='success' onClick={() => handleView(row)}>
                                        <VisibilityOutlined />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {/*Modal for view Detail*/}
            <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
                <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between' }}>Channel Details
                    <Button onClick={handleClose} sx={{ color: 'black', minWidth: 'auto', fontWeight: 'bold' }}>X</Button>
                </DialogTitle>

                <DialogContent>
                    {selectedChannel && (<>
                        <Typography><b>Name:</b>{selectedChannel.channelName}</Typography>
                        <Typography><b>Description:</b>{selectedChannel.channelDescription}</Typography>
                        <Typography><b>Category:</b>{selectedChannel.channelCategory}</Typography>
                    </>
                    )}
                </DialogContent>
            </Dialog>
        </>
    )
}

export default ChannelList
