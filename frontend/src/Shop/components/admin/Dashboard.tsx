import React from 'react';
import { Grid, Container, Box } from '@mui/material';
import Header from '../../components/admin/Header';
import Sidebar from '../../components/admin/Sidebar';
import StatCard from '../../components/admin/StatCard';
import OrderTable from '../../components/admin/OrderTable';

function Dashboard() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Header />
        <Container maxWidth="xl">
          <Grid container spacing={3} sx={{ mt: 3 }}>
            <Grid item xs={12} sm={6} md={3}>
              <StatCard title="This Week" value="458" />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <StatCard title="Last Week" value="2905" />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <StatCard title="This Month" value="6776" />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <StatCard title="Last Month" value="11994" />
            </Grid>
          </Grid>
          <Grid container spacing={3} sx={{ mt: 3 }}>
            <Grid item xs={12} sm={6} md={3}>
              <StatCard title="New Orders" value="0" color="primary" />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <StatCard title="In Progress" value="751" color="secondary" />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <StatCard title="Waiting List" value="107" color="warning" />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <StatCard title="Despatched" value="0" color="success" />
            </Grid>
          </Grid>
          <Grid container spacing={3} sx={{ mt: 3 }}>
            <Grid item xs={12}>
              <OrderTable />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default Dashboard;