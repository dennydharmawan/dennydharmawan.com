import Image from "next/image";

import Box from "@mui/material/Box";

export function UnderConstruction() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: 'auto',
          aspectRatio: '500 / 421'
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
      <Box
        sx={{
          padding: '1rem',
          textAlign: 'center'
        }}
      >
        <h2>
          We are currently working on this page, please come back again later.
        </h2>
      </Box>
    </Box>
  );
}
