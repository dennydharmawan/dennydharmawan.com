import * as React from 'react';
import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '../src/Link';
import ProTip from '../src/ProTip';
import Copyright from '../src/Copyright';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <Container maxWidth="md" sx={{ padding: '0' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          placeItems: 'center'
        }}
      >
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            height: 'auto',
            aspectRatio: '500 / 421'
            // backgroundColor: 'lightblue'
          }}
        >
          <Image
            layout="fill"
            width={500}
            height={421}
            src="/images/under-construction.png"
            alt="Under Construction"
          />
        </Box>
        <Box sx={{ padding: '1rem', textAlign: 'center' }}>
          <h2>
            We are currently working on this page, please come back again later.
          </h2>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
