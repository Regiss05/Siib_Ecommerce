import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Avatar,
  Box,
  Rating,
  IconButton,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

const ShopProfile = () => {
  const [profileData, setProfileData] = useState({
    shopName: "SIIB Burundi Shop",
    username: "@Siib2023",
    location: "BURUNDI, Bujumbura, Mutimbuzi",
    ownerName: "Luhama Muhdini",
    description: "",
    rating: 4.9,
    profileImage: "/path/to/profile-image.png", // Replace with actual path
  });

  const handleChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const handleUpdateProfile = () => {
    // Simulate database update
    console.log("Updating profile:", profileData);
    // In a real app, send profileData to your backend API
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
        <Avatar
          src={profileData.profileImage}
          sx={{ width: 80, height: 80 }}
        />
        <IconButton sx={{ position: 'relative', left: -20, bottom: -25 }}>
          <EditIcon />
        </IconButton>
      </Box>

      <TextField
        label="Name Shop"
        name="shopName"
        value={profileData.shopName}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />

      <TextField
        label="Username"
        name="username"
        value={profileData.username}
        onChange={handleChange}
        fullWidth
        margin="normal"
        InputProps={{
          endAdornment: (
            <Button size="small" color="primary">
              Change
            </Button>
          ),
        }}
      />

      <TextField
        label="Location"
        name="location"
        value={profileData.location}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />

      <TextField
        label="Name owner"
        name="ownerName"
        value={profileData.ownerName}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />

      <TextField
        label="Description"
        name="description"
        value={profileData.description}
        onChange={handleChange}
        fullWidth
        margin="normal"
        multiline
        rows={4}
      />

      <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
        <Typography variant="subtitle1" sx={{ mr: 1 }}>
          Rate
        </Typography>
        <Rating value={profileData.rating} precision={0.1} readOnly />
        <Typography variant="body2" sx={{ ml: 1 }}>
          {profileData.rating}
        </Typography>
      </Box>

      <Button
        variant="contained"
        fullWidth
        sx={{ mt: 3 }}
        onClick={handleUpdateProfile}
      >
        Update Profile
      </Button>
    </Container>
  );
};

export default ShopProfile;