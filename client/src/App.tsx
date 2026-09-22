import { AppBar, Typography } from "@mui/material";
import { VideoPlayer } from "./components/player";

export const App = () => {
  return (
    <div>
      <AppBar position="static" color="inherit" className="app-bar">
        <Typography align="center" variant="h4">
          Video Chat
        </Typography>
      </AppBar>
      <VideoPlayer />
    </div>
  );
};
