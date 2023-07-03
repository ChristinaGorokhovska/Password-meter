import { Grid, Typography } from "@mui/material";

export default function Strengths({ value, color }: { value: string; color: string }) {
  return (
    <Grid item xs={4} sx={{ backgroundColor: color, borderRadius: 5 }}>
      <Typography textAlign={"center"} fontSize={10}>
        {value}
      </Typography>
    </Grid>
  );
}
