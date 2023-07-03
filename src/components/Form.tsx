import { Card, Grid, IconButton, InputAdornment, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Strengths from "./Strengths";
import { checkStrength } from "../utilities/checkStrength";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

export default function Form() {
  const [password, setPassword] = useState<string>();
  const [strength, setStrength] = useState<number>();
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  useEffect(() => {
    const score = checkStrength(password || "");
    setStrength(score);
  }, [password]);

  return (
    <Card sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: 5 }}>
      <Typography variant="h6" color={"primary"} marginBottom={5}>
        Enter password
      </Typography>
      <TextField
        label="Password"
        type={showPassword ? "text" : "password"}
        fullWidth
        autoComplete="current-password"
        onChange={(e) => setPassword(e.target.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton aria-label="visibility" onClick={handleClickShowPassword}>
                {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <Grid marginTop={1} container display={"flex"} alignItems={"center"} flexWrap={"nowrap"} gap={1}>
        <Strengths
          value="Easy"
          color={strength === 0 ? "grey" : strength === 2 ? "yellow" : strength === 3 ? "green" : "red"}
        />
        <Strengths
          value="Medium"
          color={strength === 2 ? "yellow" : strength === 3 ? "green" : strength === -1 ? "red" : "grey"}
        />
        <Strengths value="Strong" color={strength === 3 ? "green" : strength === -1 ? "red" : "grey"} />
      </Grid>
    </Card>
  );
}
