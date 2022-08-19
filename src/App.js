import "./App.css";
import Header from "./containers/header/header";
import NavBar from "./containers/navbar/navbar";
import { useState } from "react";
import { Box, Drawer, useRadioGroup } from "@mui/material";
import { useRoutes } from "react-router-dom";
import { routes } from "./route";
import { Stack } from "@mui/system";

function App() {
  const element = useRoutes(routes);
  return (
    <Box className="container">
      <Header />
      <Stack direction="row">
        <Drawer className="drawer" anchor="left" variant="permanent">
          <NavBar />
        </Drawer>
        <main className="App">
          {element}
        </main>
      </Stack>
    </Box>
  );
}

export default App;
