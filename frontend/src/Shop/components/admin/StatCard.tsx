import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

function StatCard({ title, value, color = 'default' }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" color="textSecondary" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h4" color={color}>
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default StatCard;