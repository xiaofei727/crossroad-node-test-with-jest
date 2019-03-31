/**
 * The landing page about our service, how to sign up and where to start goes here.
 */
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

export default () => (
    <div>
        <Grid container spacing={24} style={{ padding: 24 }}>
            {/* <Grid item xs={12} sm={6} lg={4} xl={3}> */}
            <Typography gutterBottom variant="headline" component="h1">
        Welcome To Cross Roads
            </Typography>
            {/* </Grid> */}
        </Grid>
    </div>
);
