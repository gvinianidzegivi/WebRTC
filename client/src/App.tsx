import { AppBar, Typography } from "@mui/material";
import { VideoPlayer } from "./components/player";

export const App = () => {
  return (
    <div>
      <AppBar position="static" color="inherit">
        <Typography align="center" variant="h2">
          Video Chat
        </Typography>
      </AppBar>
      <VideoPlayer />
    </div>
  );
};
