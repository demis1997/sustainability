import Head from 'next/head';
import ArrowUpOnSquareIcon from '@heroicons/react/24/solid/ArrowUpOnSquareIcon';
import ArrowDownOnSquareIcon from '@heroicons/react/24/solid/ArrowDownOnSquareIcon';
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import {
  Box,
  Button,
  Container,
  Pagination,
  Stack,
  SvgIcon,
  Typography,
  Unstable_Grid2 as Grid
} from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { CompanyCard } from 'src/sections/companies/company-card';
import { CompaniesSearch } from 'src/sections/companies/companies-search';

export const companies = [
  {
    id: '2569ce0d517a7f06d3ea1f24',
    createdAt: '27/03/2019',
    description: 'we bring the finest cottons and ship all over Europe.',
    logo: '/assets/logos/logo-dropbox.png',
    title: 'Supplier from Uagnda',
    coordinates:'40.0 -74.5',

 
  },
  {
    id: 'ed2b900870ceba72d203ec15',
    createdAt: '31/03/2019',
    description: 'We supply Polyester',
    logo: '/assets/logos/logo-medium.png',
    title: 'Supplier from Cyprus',
    coordinates:'40.0 -74.5',

  },
  {
    id: 'a033e38768c82fca90df3db7',
    createdAt: '03/04/2019',
    description: 'We supply Cashmere',
    logo: '/assets/logos/logo-slack.png',
    title: 'Supplier from Canada',
    coordinates:'40.0 -74.5',
  },
  {
    id: '1efecb2bf6a51def9869ab0f',
    createdAt: '04/04/2019',
    description: 'We supply leather.',
    logo: '/assets/logos/logo-lyft.png',
    title: 'Supplier from Nepal',
    coordinates:'40.0 -74.5',
  },
  {
    id: '1ed68149f65fbc6089b5fd07',
    createdAt: '04/04/2019',
    description: 'We sell Cotton.',
    logo: '/assets/logos/logo-github.png',
    title: 'Supplier from New Jersey',
    coordinates:'40.0 -74.5',
  },
  {
    id: '5dab321376eff6177407e887',
    createdAt: '04/04/2019',
    description: 'We supply Wool',
    logo: '/assets/logos/logo-squarespace.png',
    title: 'Supplier from Italy',
    coordinates:'41.29246 12.5736108',
  }
];

const Page = () => (
  <>
    <Head>
      <title>
        Suppliers
      </title>
    </Head>
    
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="xl">
        <Stack spacing={3}>
          <Stack
            direction="row"
            justifyContent="space-between"
            spacing={4}
          >
            <Stack spacing={1}>
              <Typography variant="h4">
                Suppliers
              </Typography>
              <Stack
                alignItems="center"
                direction="row"
                spacing={1}
              >
            
              </Stack>
            </Stack>
            <div>
              <Button
                startIcon={(
                  <SvgIcon fontSize="small">
                    <PlusIcon />
                  </SvgIcon>
                )}
                variant="contained"
              >
                Add
              </Button>
            </div>
          </Stack>
          <CompaniesSearch />
          <Grid
            container
            spacing={3}
          >
            {companies.map((company) => (
              <Grid
                xs={12}
                md={6}
                lg={4}
                key={company.id}
              >
                <CompanyCard company={company} />
              </Grid>
            ))}
          </Grid>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <Pagination
              count={3}
              size="small"
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
