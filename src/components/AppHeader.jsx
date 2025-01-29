import { AppBar, Badge, Box, IconButton, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsNoneTwoToneIcon from '@mui/icons-material/NotificationsNoneTwoTone';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import React from 'react'
//sx is like style applying
const AppHeader = ({ toggleSidebar }) => {

    return (

        <>
            <AppBar position='sticky' sx={styles.appBar}>
                <Toolbar>
                    <IconButton onClick={() => toggleSidebar()}>
                        <MenuIcon />
                    </IconButton>
                    <Box sx={{ flexGrow: 1 }} />

                    < IconButton title='Notifications' color='secondary'>
                        <Badge badgeContent={14} color='error'>
                            <NotificationsNoneTwoToneIcon />
                        </Badge>
                    </IconButton>

                    <IconButton title='settings' color='secondary'>
                        <SettingsOutlinedIcon />
                    </IconButton>

                    <IconButton title='logout' color='secondary'>
                        <LogoutOutlinedIcon />
                    </IconButton>

                </Toolbar>
            </AppBar>
        </>


    );
}
/** @type {import("@mui/material").SxProps} */
const styles = {
    appBar: {
        bgcolor: 'neutral.main.light'
    }
}

export default AppHeader
