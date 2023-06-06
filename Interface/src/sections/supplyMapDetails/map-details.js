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
    supplierName: '',
    supplierDescription: '',
    supplierName2: '',
    supplierDescription2: '',
    supplierName3: '',
    supplierDescription3: '',
  });

  const handleChange = useCallback(
    (event) => {
      const { name, value } = event.target;
      setValues((prevState) => ({
        ...prevState,
        [name]: value,
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
                  value={companies.find((company) => company.title === values.supplierName) || null}
                  onChange={handleChange}
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
                <TextField
                  fullWidth
                  helperText="You can add more suppliers"
                  label="Supplier Name 2"
                  name="supplierName2"
                  onChange={handleChange}
                  value={values.supplierName2}
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
                <TextField
                  fullWidth
                  helperText="You can add more suppliers"
                  label="Supplier Name 3"
                  name="supplierName3"
                  onChange={handleChange}
                  value={values.supplierName3}
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
