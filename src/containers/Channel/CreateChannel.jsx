import React from 'react'
import { Box, FormControl, Typography, TextField, Button, } from '@mui/material'

const CreateChannel = () => {
    return (

        <Box
            component="form"
            sx={{ display: 'flex', flexDirection: 'column', width: '1000px', gap: 2, p: 2, bgcolor: 'white', borderRadius: 2, boxShadow: 2 }}
            noValidate
            autoComplete="off"
        >
            <Typography variant="h6">Add New Channel</Typography>
            <FormControl>
                <TextField id="outlined-basic" label="Channel Name" variant="outlined" name='name' />
            </FormControl>
            <FormControl>
                <TextField id="outlined-basic" label="Description" variant="outlined" name='description' />
            </FormControl>
            <FormControl>
                <TextField id="outlined-basic" label="Category" variant="outlined" name='category' />
            </FormControl>
            <Button variant='contained' color='primary' type='submit'>Add Channel</Button>
        </Box >
    )
}

export default CreateChannel
