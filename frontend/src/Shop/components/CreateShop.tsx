import React, { useState } from 'react';
import {
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Grid,
  Box,
  IconButton,
  Tooltip,
} from '@mui/material';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { ArrowBack } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const countries = [
  {
    name: 'Tanzania',
    code: '+255',
    flag: '🇹🇿',
    documents: ['TIN ', 'Brela Business Registration', 'Business License Number'],
    cities: ['Dar es Salaam', 'Arusha', 'Mwanza', 'Dodoma'],
  },
  {
    name: 'Burundi',
    code: '+257',
    flag: '🇧🇮',
    documents: ['NIF', 'Registre du Commerce', 'Patente'],
    cities: ['Bujumbura', 'Gitega', 'Ngozi', 'Muyinga'],
  },
  {
    name: 'Rwanda',
    code: '+250',
    flag: '🇷🇼',
    documents: ['TIN', 'RDB Registration', 'Trading License'],
    cities: ['Kigali', 'Butare', 'Gisenyi', 'Ruhengeri'],
  },
  {
    name: 'Ivory Coast',
    code: '+225',
    flag: '🇨🇮',
    documents: ['Numéro RCCM', 'Déclaration Fiscale d\'Existence', 'Agrément'],
    cities: ['Abidjan', 'Bouaké', 'Daloa', 'Yamoussoukro'],
  },
  {
    name: 'South Africa',
    code: '+27',
    flag: '🇿🇦',
    documents: ['Tax Registration Number', 'Company Registration Number', 'Business Permit'],
    cities: ['Johannesburg', 'Cape Town', 'Durban', 'Pretoria'],
  },

  {
    name: 'Congo DRC',
    code: '+243',
    flag: 'DRC',
    documents: ['RCCM (Registre du Commerce et du Crédit Mobilier', 'Import/Export License',],
    cities: ['Kinshasa', 'Mbuji-Mayi', 'Kananga', 'Lubumbashi'],
  },
];

const CreateShop = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    country: 'Burundi',
    shopName: '',
    shopLogo: null, // Store the logo file
    city: '',
    phoneNumber: '',
    document1: '',
    document2: '',
    document3: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const selectedCountry = countries.find((country) => country.name === formData.country);

  const handleDocumentUpload = (event, documentKey) => {
    const file = event.target.files[0];
    setFormData({ ...formData, [documentKey]: file });
  };

  const handleLogoUpload = (event) => {
    const file = event.target.files[0];
    setFormData({ ...formData, shopLogo: file });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    // Add your logic to submit the form data
  };

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', p: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <IconButton edge="start" color="inherit" aria-label="back">
          <ArrowBack />
        </IconButton>
        <Box sx={{ flexGrow: 1, textAlign: 'center' }}>
          <h2>Create shop</h2>
        </Box>
      </Box>

      <Box sx={{ mb: 2 }}>
        <h3>Personal information</h3>
        <TextField
          label="Full Name"
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="E-mail"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <FormControl fullWidth margin="normal">
          <InputLabel id="country-label">Country</InputLabel>
          <Select
            labelId="country-label"
            id="country"
            name="country"
            value={formData.country}
            label="Country"
            onChange={handleInputChange}
          >
            {countries.map((country) => (
              <MenuItem key={country.name} value={country.name}>
                {country.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      <Box sx={{ mb: 2 }}>
        <h3>Shop Details</h3>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              label="Name Shop"
              name="shopName"
              value={formData.shopName}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            {/* Logo upload with AttachFileIcon */}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <TextField
                label="Logo Shop"
                name="shopLogo"
                value={formData.shopLogo ? formData.shopLogo:""} // Display filename
                onChange={handleInputChange}
                fullWidth
                disabled
              />
              <Tooltip title="Upload Logo">
                <IconButton component="label">
                  <AttachFileIcon />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleLogoUpload}
                    style={{ display: 'none' }}
                  />
                </IconButton>
              </Tooltip>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel id="city-label">City</InputLabel>
              <Select
                labelId="city-label"
                id="city"
                name="city"
                value={formData.city}
                label="City"
                onChange={handleInputChange}
              >
                {selectedCountry && selectedCountry.cities.map((city) => (
                  <MenuItem key={city} value={city}>
                    {city}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Phone number"
              name="phoneNumber"
              value={`${selectedCountry?.code || ''} ${formData.phoneNumber}`}
              onChange={handleInputChange}
              fullWidth

            />
          </Grid>
        </Grid>

        {selectedCountry && selectedCountry.documents.map((document, index) => (
          <Box key={document} sx={{ mt: 2, display: 'flex', alignItems: 'center' }}>
            <TextField
              label={document}
              name={`document${index + 1}`}
              value={
                typeof formData[`document${index + 1}`] === 'object'
                  ? formData[`document${index + 1}`].name
                  : formData[`document${index + 1}`]
              }
              onChange={handleInputChange}
              fullWidth
            />
            <Tooltip title="Upload Document">
              <IconButton component="label">
                <AttachFileIcon />
                <input
                  type="file"
                  accept="image/*,.pdf"
                  onChange={(event) => handleDocumentUpload(event, `document${index + 1}`)}
                  style={{ display: 'none' }}
                />
              </IconButton>
            </Tooltip>
          </Box>
        ))}
      </Box>

      <Button variant="contained" color="primary" onClick={handleSubmit} fullWidth>
        Add product
      </Button>
    </Box>
  );
};

export default CreateShop;