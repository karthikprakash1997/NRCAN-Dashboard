import { Box, Button, ButtonGroup, Grid, Typography } from '@mui/material';
import { useState } from 'react';
import { BiFilter } from 'react-icons/bi';

import Map from '../../../../components/map';
import { IMaps } from '../../../../components/map/maps.types';

const MapView = ({ handleModelChange }: { handleModelChange: () => void }) => {
  const [view, setView] = useState<IMaps>({
    backgroundColor: '#4b96af',
    projection: 'WebMercator'
  });
  const handleChange = (isTwoDClicked: boolean) => {
    if ((isTwoDClicked && view.projection === 'WebMercator') || (!isTwoDClicked && view.projection === 'Orthographic')) return;
    else if (isTwoDClicked) {
      setView({
        backgroundColor: '#4b96af',
        projection: 'WebMercator'
      });
    } else {
      setView({
        backgroundColor: '#000000',
        projection: 'Orthographic'
      });
    }
  };
  return (
    <>
      <Box sx={{ boxShadow: 5, borderRadius: 3 }} bgcolor={view.backgroundColor}>
        <Box style={{ display: 'flex', columnGap: '1rem', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography variant="h5" color="white" padding={1}>
            {view.projection === 'WebMercator' ? 'Map View' : 'Globe View'}
          </Typography>
          <Grid paddingRight={1} display={'flex'} columnGap={2}>
            <ButtonGroup color="inherit" size="small" variant="contained" aria-label="outlined button group">
              <Button color={view.projection !== 'WebMercator' ? 'inherit' : 'error'} onClick={() => handleChange(true)}>
                2D
              </Button>
              <Button color={view.projection === 'WebMercator' ? 'inherit' : 'error'} onClick={() => handleChange(false)}>
                3D
              </Button>
            </ButtonGroup>
            <BiFilter size={30} color="white" cursor={'pointer'} onClick={handleModelChange} />
          </Grid>
        </Box>
        <Map props={view} />
      </Box>
    </>
  );
};

export default MapView;
