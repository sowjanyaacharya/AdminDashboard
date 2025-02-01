import { Avatar, Box, Typography, useTheme } from '@mui/material'
import { Menu, MenuItem, Sidebar } from 'react-pro-sidebar'
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import StyleOutlinedIcon from '@mui/icons-material/StyleOutlined';
import SourceOutlinedIcon from '@mui/icons-material/SourceOutlined';
import InsightsOutlinedIcon from '@mui/icons-material/InsightsOutlined';
import profileImage from '../assets/profile.png'
import { Link, useLocation } from 'react-router-dom';

const SideNav = ({ sidebarOpen, collapsed }) => {

    const theme = useTheme();
    //It is used to make active on side nav bar
    const location = useLocation();

    return (
        <Sidebar collapsed={collapsed} open={sidebarOpen} sx={{
            height: '100%',

        }}
            breakPoint='md'
            backgroundColor='white'
        >
            <Box sx={styles.avatarContainer}>
                <Avatar sx={styles.avatar} alt="your organisation" src={profileImage} />
                {!collapsed ? <Typography variant="body2" sx={styles.yourorganisation}>My Profile</Typography> : null}
            </Box>
            <Menu MenuItemStyles={{
                button: ({ active }) => {
                    return {
                        backgroundColor: active ? theme.palette.neutral.medium : undefined
                    }
                }
            }}>
                {/*here the link path is used to update the browser url*/}
                <MenuItem active={location.pathname === '/'} component={<Link to="/" />} icon={<DashboardOutlinedIcon />}>
                    <Typography variant='body2'>Dashboard</Typography>
                </MenuItem>

                <MenuItem active={location.pathname === '/contents'} component={<Link to="/contents" />} icon={<StyleOutlinedIcon />} >
                    <Typography variant='body2'>Contents</Typography>
                </MenuItem>

                <MenuItem active={location.pathname === '/analytics'} component={<Link to="/analytics" />} icon={<InsightsOutlinedIcon />} >
                    <Typography variant='body2'>Analytics</Typography>
                </MenuItem>

                <MenuItem active={location.pathname === '/customization'} component={<Link to="/customization" />} icon={<SourceOutlinedIcon />} >
                    <Typography variant='body2'>Customization</Typography>
                </MenuItem>
            </Menu>
        </Sidebar >

    )
}
/** @type {import("@mui/material").SxProps} */
const styles = {
    avatarContainer: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        my: 5
    },
    avatar: {
        width: '40%',
        height: 'auto'
    },
    yourorganisation: {
        mt: 1
    }
}

export default SideNav
