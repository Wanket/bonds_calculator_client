import React from "react";
import MainAppBar from "@/view/main_appbar";
import MainRoute from "@/view/main_route";
import Box from "@mui/material/Box";

function App() {
  return (
    <Box>
      <MainRoute>
        <MainAppBar />
      </MainRoute>
    </Box>
  );
}

export default App;
