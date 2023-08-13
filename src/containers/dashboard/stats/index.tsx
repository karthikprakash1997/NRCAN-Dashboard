import { Box, Grid, Paper, Typography } from '@mui/material';
import { FaTools } from 'react-icons/fa';
import { SiGoogleanalytics } from 'react-icons/si';
import { BsGlobeAmericas, BsClock } from 'react-icons/bs';
import { MdNumbers } from 'react-icons/md';

import StatsCards from '../../../components/statCards';
import PieChart from '../../../components/charts/pieChart.ts';
import { formatNumberWithAbbreviation } from '../../../utils/numberFormatter';

const Stats = () => {
  // const DataCount = () => (
  //   <><Typography>{formatNumberWithAbbreviation(100000)}</Typography> </>
  // )

  const statsCardData = [
    {
      title: 'Data Count',
      tooltipText: 'Text for tooltip',
      subTitle: (
        <Box display={'flex'} alignItems={'center'} alignContent={'center'}>
          <BsClock fontSize={'0.75rem'} style={{ marginTop: 3 }} />
          <Typography variant="body1" marginLeft={0.5}>
            updated just now
          </Typography>
        </Box>
      ),
      Content: (
        <>
          <Typography margin={1} variant="h4">
            {formatNumberWithAbbreviation(100000)}
          </Typography>{' '}
        </>
      ),
      Icon: <MdNumbers size={25} color="white" />,
      background: 'linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))'
    },
    {
      title: 'Origin Analysis',
      tooltipText: 'Text for tooltip',
      subTitle: 'Last updated at',
      Content: (
        <PieChart
          props={{
            height: 80,
            width: 80,
            plotOptions: {
              series: {
                borderWidth: 0,
                colorByPoint: true,
                type: 'pie',
                size: '100%',
                innerSize: '80%',
                dataLabels: {
                  enabled: false,
                  crop: false,
                  distance: '-10%',
                  style: {
                    fontWeight: 'bold',
                    fontSize: '16px'
                  },
                  connectorWidth: 0
                }
              }
            },
            series: [
              {
                type: 'pie',
                // name: startYear,
                data: [
                  { name: 'Category A', y: 45 },
                  { name: 'Category B', y: 25 },
                  { name: 'Category C', y: 15 },
                  { name: 'Category D', y: 10 },
                  { name: 'Category E', y: 5 }
                ]
              }
            ]
          }}
        />
      ),
      Icon: <SiGoogleanalytics size={25} color="white" />,
      background: 'linear-gradient(195deg, #49a3f1, #1A73E8)'
    },
    {
      title: 'Origin Count',
      tooltipText: 'Text for tooltip',
      subTitle: 'Last updated at',
      Content: (
        <PieChart
          props={{
            height: 80,
            width: 80,
            plotOptions: {
              series: {
                borderWidth: 0,
                colorByPoint: true,
                type: 'pie',
                size: '100%',
                innerSize: '80%',
                dataLabels: {
                  enabled: false,
                  crop: false,
                  distance: '-10%',
                  style: {
                    fontWeight: 'bold',
                    fontSize: '16px'
                  },
                  connectorWidth: 0
                }
              }
            },
            series: [
              {
                type: 'pie',
                // name: startYear,
                data: [
                  { name: 'Category A', y: 45 },
                  { name: 'Category B', y: 25 },
                  { name: 'Category C', y: 15 },
                  { name: 'Category D', y: 10 },
                  { name: 'Category E', y: 5 }
                ]
              }
            ]
          }}
        />
      ),
      Icon: <BsGlobeAmericas size={25} color="white" />,
      background: 'linear-gradient(195deg, #66BB6A, #43A047)'
    },
    {
      title: 'Parts Count',
      tooltipText: 'Text for tooltip',
      subTitle: 'Last updated at',
      Content: (
        <PieChart
          props={{
            height: 80,
            width: 80,
            plotOptions: {
              series: {
                borderWidth: 0,
                colorByPoint: true,
                type: 'pie',
                size: '100%',
                innerSize: '80%',
                dataLabels: {
                  enabled: false,
                  crop: false,
                  distance: '-10%',
                  style: {
                    fontWeight: 'bold',
                    fontSize: '16px'
                  },
                  connectorWidth: 0
                }
              }
            },
            series: [
              {
                type: 'pie',
                // name: startYear,
                data: [
                  { name: 'Category A', y: 45 },
                  { name: 'Category B', y: 25 },
                  { name: 'Category C', y: 15 },
                  { name: 'Category D', y: 10 },
                  { name: 'Category E', y: 5 }
                ]
              }
            ]
          }}
        />
      ),
      Icon: <FaTools size={25} color="white" />,
      background: 'linear-gradient(195deg, #EC407A, #D81B60)'
    }
  ];

  return (
    <>
      <Grid margin={3} marginTop={4}>
        <Grid container spacing={3}>
          {statsCardData.map((it) => {
            return (
              <Grid item xs={12} md={3} sm={6} xl={3}>
                <StatsCards props={it} />
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </>
  );
};

export default Stats;
