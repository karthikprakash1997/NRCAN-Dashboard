import { Box, Card, Grid, Icon, Tooltip, Typography } from '@mui/material';

import { IStatCardsTypes } from './statCards.types';

const StatsCards = ({ props }: { props: IStatCardsTypes }) => {
  const { background, title, subTitle, Content, Icon } = props;
  return (
    <Grid height={80} sx={{ boxShadow: 5, borderRadius: 3 }} bgcolor={'white'} item style={{ display: 'flex', alignItems: 'center' }}>
      <Grid display={'flex'} alignItems={'center'} justifyContent={'center'} margin={1} height={'3.5rem'} width={'7rem'} sx={{ boxShadow: 5, borderRadius: 3 }} style={{ background }} marginTop={-6}>
        {Icon}
      </Grid>
      <Grid width={'-webkit-fill-available'}>
        <Typography variant="h6" color="CaptionText">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {subTitle}
        </Typography>
      </Grid>
      <Grid container width={'fit-content'} direction={'row'} justifyContent={'flex-end'} marginRight={0.75}>
        {Content}
      </Grid>
    </Grid>
  );
};

// linear-gradient(195deg, #49a3f1, #1A73E8)
// linear-gradient(195deg, #66BB6A, #43A047)
// linear-gradient(195deg, #EC407A, #D81B60)

export default StatsCards;
