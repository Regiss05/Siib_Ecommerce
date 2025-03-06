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
  Card,
  CardMedia,
  Typography,
  Paper,
  styled,
  useMediaQuery,
  useTheme,
  ImageList,
  ImageListItem,
} from '@mui/material';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import DeleteIcon from '@mui/icons-material/Delete';

const ProductForm = () => {
  const [shopName, setShopName] = useState('SIIB BURUNDI');
  const [address, setAddress] = useState('');
  const [country, setCountry] = useState('Burundi');
  const [productName, setProductName] = useState('Smar TV');
  const [price, setPrice] = useState('0.00158 Pi');
  const [availableProducts, setAvailableProducts] = useState('10');
  const [category, setCategory] = useState('Electronics');
  const [description, setDescription] = useState('Resolution: 4K Ultra HD (3840 x 2160) | Refresh Rate: 60 Hert,Connectivity: 3 HDMI Ports to connect set top box, Blu Ray players, gaming console | 1 USB Ports to connect hard drive| 1 Headphone output');
  const [imageCover, setImageCover] = useState(null);
  const [otherImages, setOtherImages] = useState([]);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleImageCoverChange = (event) => {
    const file = event.target.files[0];
    setImageCover(file);
  };

  const handleOtherImagesChange = (event) => {
    const files = Array.from(event.target.files);
    const handleRemoveOtherImage = (index: number) => {
      setOtherImages((prevImages) => prevImages.filter((_, i) => i !== index));
    };
  };
  const handleRemoveImageCover = () => {
    setImageCover(null);
  };

  const handleRemoveOtherImage = (index) => {
    setOtherImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log({
      shopName,
      address,
      country,
      productName,
      price,
      availableProducts,
      category,
      description,
      imageCover,
      otherImages,
    });
  };

  const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(3),
    marginBottom: theme.spacing(2),
    overflowY: 'auto',
    maxHeight: '80vh', // Adjust as needed
  }));

  return (
    <StyledPaper>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h6" component="h2">
            Add item
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1" component="h3">
            SHOP ADRESS
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Shop name"
            value={shopName}
            onChange={(e) => setShopName(e.target.value)}
            fullWidth
            margin="normal"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            fullWidth
            margin="normal"
          />
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth margin="normal">
            <InputLabel id="country-label">Country</InputLabel>
            <Select
              labelId="country-label"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              label="Country"
            >
              <MenuItem value="Burundi">Burundi</MenuItem>
              <MenuItem value="Tanzania">Tanzania</MenuItem>
              <MenuItem value="Burundi">Rwanda</MenuItem>
              <MenuItem value="Tanzania">South Africa</MenuItem>
              {/* Add more countries as needed */}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1" component="h3">
            PRODUCT INFORMATION
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Name product"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            fullWidth
            margin="normal"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            fullWidth
            margin="normal"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Available product"
            type="number"
            value={availableProducts}
            onChange={(e) => setAvailableProducts(e.target.value)}
            fullWidth
            margin="normal"
          />
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth margin="normal">
            <InputLabel id="category-label">Category</InputLabel>
            <Select
              labelId="category-label"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              label="Category"
            >
              <MenuItem value="Electronics">Electronics</MenuItem>
              {/* Add more categories as needed */}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Description"
            multiline
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            fullWidth
            margin="normal"
          />
        </Grid>
        <Grid item xs={12}>
          <input
            accept="image/*"
            style={{ display: 'none' }}
            id="image-cover-upload"
            type="file"
            onChange={handleImageCoverChange}
          />
          <label htmlFor="image-cover-upload">
            <Button variant="outlined" component="span" startIcon={<PhotoCamera />}>
              Upload image cover
            </Button>
          </label>
          {imageCover && (
            <Box mt={2} display="flex" alignItems="center">
              <Card sx={{ maxWidth: isMobile ? '100%' : 200, marginRight: 2 }}>
                <CardMedia
                  component="img"
                  image={URL.createObjectURL(imageCover)}
                  alt="Image Cover"
                />
              </Card>
              <IconButton onClick={handleRemoveImageCover} aria-label="remove image cover">
                <DeleteIcon />
              </IconButton>
            </Box>
          )}
        </Grid>
        <Grid item xs={12}>
          <input
            accept="image/*"
            style={{ display: 'none' }}
            id="other-images-upload"
            type="file"
            multiple
            onChange={handleOtherImagesChange}
          />
          <label htmlFor="other-images-upload">
            <Button variant="outlined" component="span" startIcon={<PhotoCamera />}>
              Upload other images (Max 4)
            </Button>
          </label>
          {otherImages.map((image, index) => (
              <ImageListItem key={index}>
                <img src={URL.createObjectURL(image)} alt={`Other ${index}`} loading="lazy" />
                <IconButton
                  aria-label="delete"
                  sx={{ position: 'absolute', top: 5, right: 5, color: 'white' }}
                  onClick={() => handleRemoveOtherImage(index)}
                >
                  <DeleteIcon />
                </IconButton>
              </ImageListItem>
            ))}
        </Grid>
        <Grid item xs={19}>
          <Button variant="contained" color="secondary" onClick={handleSubmit}>
            Register the product
          </Button>
        </Grid>
      </Grid>
    </StyledPaper>
  );
};

export default ProductForm;