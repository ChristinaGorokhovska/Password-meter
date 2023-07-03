import { Grid } from "@mui/material";
import Form from "./components/Form";

function App() {
  return (
    <>
      <Grid container display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <Grid item xs={4} marginTop={20}>
          <Form />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
