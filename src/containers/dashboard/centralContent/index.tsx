import { Box, Fade, Grid, Modal, Tab, Tabs } from '@mui/material';
import { useState } from 'react';

import MapView from './mapView';
import ModalView from './modalView';
import { RichObjectTreeView } from '../../../components';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'white',
  // border: '2px solid #000',
  boxShadow: 24,
  borderRadius: 2,
  p: 4
};

const CentralSection = () => {
  const [open, setOpen] = useState(false);
  const [detailModelOpen, setDetailModelOpen] = useState(false);

  const [tabs, setTabs] = useState(0);
  const handleChange = () => setOpen(!open);
  // const handleDetailmodelChange = () => setDetailModelOpen(!detailModelOpen);

  return (
    <>
      <Grid margin={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={9} sm={8} xl={12}>
            <MapView handleModelChange={handleChange} />
          </Grid>
        </Grid>
      </Grid>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={() => setOpen(false)}
        closeAfterTransition
        // slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500
          }
        }}
      >
        <Fade in={open}>
          <div>
            <Box sx={style}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={tabs} onChange={(_1, newValue) => setTabs(newValue)} aria-label="basic tabs example">
                  <Tab label="category" />
                  <Tab label="Country" />
                </Tabs>
              </Box>
              <Box>{tabs === 0 ? <RichObjectTreeView /> : 'Country Select'}</Box>
              <Box>{/* <RichObjectTreeView /> */}</Box>
            </Box>
          </div>
          {/* <Typography >Hello</Typography> */}
        </Fade>
      </Modal>
    </>
  );
};

export default CentralSection;
