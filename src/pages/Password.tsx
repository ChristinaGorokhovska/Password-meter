import { Grid } from "@mui/material";
import Form from "../components/Form";

export default function Password() {
  return (
    <>
      <Grid container display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <Grid item md={4} sm={8} xs={10} marginTop={20}>
          <Form />
        </Grid>
      </Grid>
    </>
  );
}
