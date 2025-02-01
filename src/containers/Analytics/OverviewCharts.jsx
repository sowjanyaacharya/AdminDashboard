import { Box, Tabs, Tab } from '@mui/material'
import { ArrowDropDownCircleSharp } from '@mui/icons-material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useState, forwardRef } from 'react'
import { Line, Bar } from 'react-chartjs-2'
import { Pie } from 'react-chartjs-2'
import TabPanel from '../../components/TabPanel';
import AnalyticsTabHead from './AnalyticsTabHead';
import { getMainChartData, mainChartOptions } from './ChartConfigs';
//Refs are used to pass to the component
const ViewsTabHead = forwardRef((props, ref) => <AnalyticsTabHead {...props}
    title='Views' icon={<ArrowDropDownCircleSharp color='green' />} value='21.4k' subtitle={'700 less than usual'} />)

const WatchTabHead = forwardRef((props, ref) => <AnalyticsTabHead {...props}
    title='Watch Time' icon={<ArrowDropDownCircleSharp color='green' sx={{ transform: 'rotate(180deg)' }} />} value='400' subtitle={'27 more than usual'} />)

const SubscribersTabHead = forwardRef((props, ref) => <AnalyticsTabHead {...props}
    title='Subscribers' icon={<CheckCircleIcon color='green' />} value='+140' subtitle={'about the same asusual'} />)

const ReveneueTabHead = forwardRef((props, ref) => <AnalyticsTabHead {...props}
    title='Revenue' icon={<ArrowDropDownCircleSharp color='green' sx={{ transform: 'rotate(180deg)' }} />} value='$240.02' subtitle={'700 less than usual'} />)

const OverviewCharts = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    return (
        <Box sx={styles.container}>
            <Tabs value={value} onChange={handleChange} sx={styles.tab}>
                <Tab component={ViewsTabHead} id='tab-0' />
                <Tab component={WatchTabHead} id='tab-1' />
                <Tab component={SubscribersTabHead} id='tab-2' />
                <Tab component={ReveneueTabHead} id='tab-3' />
            </Tabs>
            <TabPanel value={value} index={0} mt={0}>
                <Box sx={styles.mainChart}>
                    <Line options={mainChartOptions} data={getMainChartData()} />
                </Box>
            </TabPanel>
            <TabPanel value={value} index={1} mt={0}>
                <Box sx={styles.mainChart}>
                    <Bar options={mainChartOptions} data={getMainChartData()} />
                </Box>
            </TabPanel>
            <TabPanel value={value} index={2} mt={0}>
                <Box sx={styles.mainChart}>
                    <Pie options={mainChartOptions} data={getMainChartData()} />
                </Box>
            </TabPanel>
            <TabPanel value={value} index={3} mt={0}>
                <Box sx={styles.mainChart}>
                    <Line options={mainChartOptions} data={getMainChartData()} />
                </Box>
            </TabPanel>
        </Box>
    )
}

export default OverviewCharts

/** @type {import("@mui/material").SxProps} */
const styles = {
    container: {
        mt: 4,
        width: '100%',
    },
    mainChart: {
        height: 300,
        width: 650,
        boderColor: 'neutral.medium',

    },
    tab: {
        marginRight: 2
    }
}
