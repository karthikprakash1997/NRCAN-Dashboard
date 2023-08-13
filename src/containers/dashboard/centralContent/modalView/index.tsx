import { Box, Grid, Paper, Typography } from '@mui/material';
import { FlagIcon } from 'react-flag-kit';

import PieChart from '../../../../components/charts/pieChart.ts';

const ModalView = () => {
  return (
    <>
      <Grid sx={{ boxShadow: 5, borderRadius: 3 }} bgcolor={'white'}>
        <Box padding={1} paddingRight={2} paddingLeft={2} style={{ display: 'flex', columnGap: '1rem', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography variant="h5" color="CaptionText">
            1. USA
          </Typography>
          <FlagIcon code="US" size={20} />
        </Box>
        {/* <Grid display={'flex'} alignContent={'center'} alignItems={'center'} justifyContent={'center'}>
          <PieChart
            props={{
              height: 300,
              width: 300,
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
        </Grid> */}
      </Grid>
    </>
  );
};

export default ModalView;
