import React, { useState } from 'react';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  TextField
} from '@mui/material';

export const MapProfile = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  return (
    <Card>
      <CardContent>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
   
          <TextField
            label="Name"
            variant="outlined"
            value={name}
            onChange={handleNameChange}
            fullWidth
            sx={{ mb: 2 }}
            helperText="Enter your map name"
          />
          <TextField
            label="Description"
            variant="outlined"
            value={description}
            onChange={handleDescriptionChange}
            fullWidth
            helperText="Enter your map description"
          />
        </Box>
      </CardContent>
      
    </Card>
  );
};
