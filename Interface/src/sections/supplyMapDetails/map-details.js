import { useCallback, useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  TextField,
  Unstable_Grid2 as Grid,
  Autocomplete
} from '@mui/material';

import { companies } from '../../pages/supplierList';

export const MapDetails = () => {
  const [values, setValues] = useState({
    supplierName: null,
    supplierDescription: '',
    supplierName2: null,
    supplierDescription2: '',
    supplierName3: null,
    supplierDescription3: '',
  });

  const handleChange = useCallback(
    (event, newValue, name) => {
      setValues((prevState) => ({
        ...prevState,
        [name]: newValue,
      }));
    },
    []
  );

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
  }, []);

  return (
    <form autoComplete="off" noValidate onSubmit={handleSubmit}>
      <Card>
        <CardHeader subheader="The information can be edited" title="Add Suppliers" />
        <CardContent sx={{ pt: 0 }}>
          <Box sx={{ m: -1.5 }}>
            <Grid container spacing={3}>
              <Grid xs={12} md={6}>
                <Autocomplete
                  openOnFocus={false}
                  fullWidth
                  options={companies}
                  getOptionLabel={(option) => option.title}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Supplier Name"
                      helperText="Please specify the name of the supplier"
                      InputProps={{ ...params.InputProps, endAdornment: null }}
                    />
                  )}
                  value={values.supplierName}
                  onChange={(event, newValue) => handleChange(event, newValue, 'supplierName')}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  helperText="e.g. supplies cotton"
                  label="Supplier Description"
                  name="supplierDescription"
                  onChange={handleChange}
                  value={values.supplierDescription}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <Autocomplete
                  openOnFocus={false}
                  fullWidth
                  options={companies}
                  getOptionLabel={(option) => option.title}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Supplier Name 2"
                      helperText="Please specify the name of the supplier"
                      InputProps={{ ...params.InputProps, endAdornment: null }}
                    />
                  )}
                  value={values.supplierName2}
                  onChange={(event, newValue) => handleChange(event, newValue, 'supplierName2')}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  helperText="e.g. supplies cotton"
                  label="Supplier Description"
                  name="supplierDescription2"
                  onChange={handleChange}
                  value={values.supplierDescription2}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <Autocomplete
                  openOnFocus={false}
                  fullWidth
                  options={companies}
                  getOptionLabel={(option) => option.title}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Supplier Name 3"
                      helperText="Please specify the name of the supplier"
                      InputProps={{ ...params.InputProps, endAdornment: null }}
                    />
                  )}
                  value={values.supplierName3}
                  onChange={(event, newValue) => handleChange(event, newValue, 'supplierName3')}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  helperText="e.g. supplies cotton"
                  label="Supplier Description"
                  name="supplierDescription3"
                  onChange={handleChange}
                  value={values.supplierDescription3}
                />
              </Grid>
            </Grid>
          </Box>
        </CardContent>
        <Divider />
        <CardActions sx={{ justifyContent: 'flex-end' }}>
          <Button variant="contained">Generate Map</Button>
        </CardActions>
      </Card>
    </form>
  );
};
