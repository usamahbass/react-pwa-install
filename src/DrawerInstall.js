import React from "react";
import { Drawer, Button, Typography, Box } from "@mui/material";
import "./drawer.css";

const DrawerInstall = ({
  open,
  onClose,
  description,
  handleInstall,
  installTitle,
  closeTitle,
}) => {
  return (
    <Drawer
      anchor="bottom"
      open={open}
      classes={{ paper: "custom-drawer-paper" }}
    >
      <Box
        gap="5"
        padding="4rem"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Typography
          variant="h6"
          alignn="center"
          style={{
            color: "white",
            fontSize: "1.15rem",
            textAlign: "center",
            fontFamily: `'Poppins', sans-serif`,
          }}
        >
          {description}
        </Typography>

        <Button className="custom-btn-install" onClick={handleInstall}>
          {installTitle}
        </Button>
        <Button className="custom-btn-close" onClick={onClose}>
          {closeTitle}
        </Button>
      </Box>
    </Drawer>
  );
};

export default DrawerInstall;
