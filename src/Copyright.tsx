import * as React from "react";

import MuiLink from "@mui/material/Link";
import Typography from "@mui/material/Typography";

export default function Copyright() {
  return (
    <Typography variant="body2" align="center">
      {'Copyright © '}
      <MuiLink color="inherit" href="https://dennydharmawan.com/">
        Denny Dharmawan
      </MuiLink>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}
