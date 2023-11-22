import React from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

export default function NatBar() {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary">
        <Container>
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              <Link to="/" style={{ textDecoration: "none", color: "#eee" }}>
                Concecionaria
              </Link>
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => navigate("/tasks/new")}
            >
              Agregar automovil
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
