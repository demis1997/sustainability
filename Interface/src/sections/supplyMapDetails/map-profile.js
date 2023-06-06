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
  const [name, setName] = useState('Anika Visser');
  const [description, setDescription] = useState('Los Angeles');

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
          <Avatar
            src="/assets/avatars/avatar-anika-visser.png"
            sx={{
              height: 80,
              mb: 2,
              width: 80
            }}
          />
          <TextField
            label="Name"
            variant="outlined"
            value={name}
            onChange={handleNameChange}
            fullWidth
            sx={{ mb: 2 }}
          />
          <TextField
            label="Description"
            variant="outlined"
            value={description}
            onChange={handleDescriptionChange}
            fullWidth
          />
        </Box>
      </CardContent>
      <Divider />
      <CardActions>
        <Button fullWidth variant="text">
          Upload picture
        </Button>
      </CardActions>
    </Card>
  );
};
