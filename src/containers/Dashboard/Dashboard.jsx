import { Avatar, Box, Card, CardContent, Divider, Typography } from '@mui/material'
import React from 'react'
import LatestVideoCard from '../../components/LatestVideoCard'
import ColorText from '../../components/ColorText'
import DashView from '../../components/DashView'

const Dashboard = () => {
    return (
        <Box>
            <Typography sx={styles.pageTitle} variant='h5'>Channel DashBoard</Typography>
            <Box sx={styles.columnContainer1}>
                <DashView title='Views' value='123' />
                <DashView title='Subscribers' value='123' />
                <DashView title='Likes' value='123' />
                <DashView title='Visits' value='123' />
            </Box>
            <Box sx={styles.columnContainer2}>
                <LatestVideoCard sx={styles.item} />
                <Card sx={styles.item}>
                    <CardContent>
                        <Typography variant="cardTitle">Latest Post</Typography>
                        <Box sx={styles.postAuthorSection}>
                            <Avatar sx={styles.avatar} src="src/assets/profile.png" />
                            <Typography sx={styles.postMeta}>Python Tutorial</Typography>
                            <Typography sx={styles.postMeta}>Jan 29 2025</Typography>
                        </Box>
                        <Typography variant="body2">This is the tutorial where we can get the lumpsum knowledge from this tutorial where we can cover the basic of tutorial</Typography>
                        <Divider sx={styles.divider} />
                        <Box sx={styles.postStatus}>
                            <Typography variant="body2">Likes</Typography>
                            <Typography variant="body2">Comments</Typography>
                            <Typography variant="h6">12</Typography>
                            <Typography variant="h6">6</Typography>
                        </Box>
                        <Typography sx={styles.cardAction} variant='link'>GO TO COMMUNITY TAB</Typography>
                    </CardContent>
                </Card>
                <Card sx={styles.item}>
                    <CardContent>
                        <Typography variant="cardTitle">Channel Analytics</Typography>
                        <Typography variant="h7">Current Subscribers</Typography>
                        <Typography variant="h4">4,144</Typography>
                        <Typography variant="h7"><ColorText color={'green.main'}>+77</ColorText><ColorText color={'neutral.normal'}>in Last 28days</ColorText></Typography>
                        <Divider sx={styles.divider} />
                        <Typography variant="h6">Summary</Typography>
                        <Typography variant="h8"><ColorText color={'neutral.main'}>Last 28days</ColorText></Typography>
                        <Box sx={styles.videoStatsRow}>
                            <Typography variant="h7">Views</Typography>
                            <Typography variant="h7">255</Typography>
                        </Box>
                        <Box sx={styles.videoStatsRow}>
                            <Typography variant="h7">Watch Time (hours)</Typography>
                            <Typography variant="h7">30</Typography>
                        </Box>
                        <Box sx={styles.videoStatsRow}>
                            <Typography variant="h7">Estimated Revenue</Typography>
                            <Typography variant="h7">$450</Typography>
                        </Box>
                        <Divider sx={styles.divider} />
                        <Typography variant="h6">Top Videos</Typography>
                        <Typography variant="h8"><ColorText color={'neutral.main'}>Last 28days</ColorText></Typography>
                        <Box sx={styles.videoStatsRow}>
                            <Typography variant="h7">How to become a software developer in 2025</Typography>
                            <Typography variant="h7">450</Typography>
                        </Box>
                        <Box sx={styles.videoStatsRow}>
                            <Typography variant="h7">CSS Grid tutorials: How to make use of grids</Typography>
                            <Typography variant="h7">$450</Typography>
                        </Box>
                        <Box sx={styles.videoStatsRow}>
                            <Typography variant="h7">Call APIS in react native</Typography>
                            <Typography variant="h7">$450</Typography>
                        </Box>
                        <Box sx={styles.videoStatsRow}>
                            <Typography sx={styles.cardAction} variant='link'>GO TO VIDEO ANALYTICS</Typography>
                        </Box>
                    </CardContent>
                </Card>
                <Card sx={styles.item}>
                    <CardContent>
                        <Typography variant="cardTitle">Latest Comments</Typography>
                        <Typography variant="h7"><ColorText color='neutral.main'>Channel Comments</ColorText></Typography>
                        <Box sx={styles.commentRow}>
                            <Avatar sx={styles.avatar} src="src/assets/profile.png" />
                            <Box>
                                <Box sx={styles.commentDetailSection}>
                                    <Typography sx={styles.postMeta}>Python Tutorial</Typography>
                                    <Typography sx={styles.postMeta}>2 weeks ago</Typography>
                                </Box>
                                <Typography sx={styles.commentText}>Had a Wonderful session with Python Tutorial</Typography>
                            </Box>
                            <Box component={'img'} sx={styles.videoThumbnail} src='src/assets/recursion.png' />
                        </Box>
                        <Divider sx={styles.divider} />
                        <Box sx={styles.commentRow}>
                            <Avatar sx={styles.avatar} src="src/assets/profile.png" />
                            <Box>
                                <Box sx={styles.commentDetailSection}>
                                    <Typography sx={styles.postMeta}>Python Tutorial</Typography>
                                    <Typography sx={styles.postMeta}>2 weeks ago</Typography>
                                </Box>
                                <Typography sx={styles.commentText}>Please Provide the Django Hands on Project</Typography>
                            </Box>
                            <Box component={'img'} sx={styles.videoThumbnail} src='src/assets/recursion.png' />
                        </Box>
                        <Divider sx={styles.divider} />
                        <Box sx={styles.commentRow}>
                            <Avatar sx={styles.avatar} src="src/assets/profile.png" />
                            <Box>
                                <Box sx={styles.commentDetailSection}>
                                    <Typography sx={styles.postMeta}>Python Tutorial</Typography>
                                    <Typography sx={styles.postMeta}>2 weeks ago</Typography>
                                </Box>
                                <Typography sx={styles.commentText}>Please Give me the Flask Project</Typography>
                            </Box>

                        </Box>
                        <Typography sx={styles.cardAction} variant='link'>VIEW MORE</Typography>
                    </CardContent>
                </Card>
                <Card sx={styles.item}>
                    <CardContent sx={styles.ideaContent}>
                        <Box>
                            <Typography variant="cardTitle">Ideas For You</Typography>
                            <Typography sx={styles.ideaQuestion}>Read to get business?</Typography>
                            <Typography variant="h7">
                                Get Tips For Success
                            </Typography>
                            <Typography sx={styles.cardAction} variant='link'>GET STARTED NOW</Typography>
                        </Box>

                    </CardContent>
                </Card>
            </Box>
        </Box >
    )
}

export default Dashboard

/** @type {import("@mui/material").SxProps} */
const styles = {
    pageTitle: {
        mb: 6
    },
    columnContainer1: {
        columnWidth: '200px',
        columnCount: 4,
        mb: 2,
    },
    columnContainer2: {
        columnWidth: '280px',
        columnCount: 3,
    },
    item: {
        mb: 2,
    },
    postAuthorSection: {
        display: 'flex',
        alignItems: 'center',
        my: 3,
    },
    postMeta: {
        width: '150px',
        height: 'auto',
        mr: 1,
        fontSize: '0.8rem',
        color: 'neutral.normal',

    },
    divider: {
        my: 2,
    },
    postStatus: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        my: 3
    },
    cardAction: {
        mt: 3,
    },
    videoStatsRow: {
        display: 'flex',
        justifyContent: 'space-between',
        mt: 2,
        '&:hover': {
            color: 'primary.main',
            cursor: 'pointer',
        }
    },
    commentRow: {
        display: 'flex',
        alignItems: 'flex-start',
        mt: 2
    },
    commentDetailSection: {
        display: 'flex',
        alignItems: 'center',
    },
    commentText: {
        fontSize: '0.8rem',
        mt: 0.5,
        mr: 2,
    },
    ideaQuestion: {

    },
    ideaContent: {
        fontSize: '0.9rem',
        fontWeight: 500,
        my: 2,
    }

}