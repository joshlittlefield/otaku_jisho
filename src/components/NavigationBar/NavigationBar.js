import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const NavigationBar = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState("");

  const handleChange = (event, value) => {
    setValue(value);
    if (value === "Home") {
      navigate(`/`);
    } else {
      navigate(`/${value}`);
    }
  };

  return (
    <Box className="Navbar" sx={{ width: "100%" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="nav tabs example"
      >
        <Tab value="Home" label="Home" />
        <Tab value="AllLevels" label="All Levels" />
        <Tab value="N1" label="N1" />
        <Tab value="N2" label="N2" />
        <Tab value="N3" label="N3" />
        <Tab value="N4" label="N4" />
        <Tab value="N5" label="N5" />
      </Tabs>
    </Box>
  );
};
export default NavigationBar;
