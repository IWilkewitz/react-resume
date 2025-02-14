import React from "react";
import { TextField, Grid2 } from "@mui/material";

function SideBySideTextFields() {
  return (
    <Grid2 container spacing={2}>
      <Grid2 item xs={6}>
      <p>Some text</p>
      </Grid2>
      <Grid2 item xs={6}>
        <p>Some text 2</p>
      </Grid2>
    </Grid2>
  );
}

export default SideBySideTextFields;
