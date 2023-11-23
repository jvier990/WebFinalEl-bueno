import React from "react";
import { useEffect, useState } from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function TaskList() {
  const navigate = useNavigate();

  return (
    <>
      <h1>Registro de Automoviles</h1>

      <Card style={{ marginBottom: ".7rem", backgroundColor: "#1e272e" }}>
        <CardContent
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div style={{ color: "white" }}>
            <Typography>Administrar Automoviles</Typography>
          </div>
          <div>
            <Button
              variant="contained"
              color="warning"
              onClick={() => {
                navigate("/autos");
              }}
              style={{ marginLeft: ".5rem" }}
            >
              IR
            </Button>
          </div>
        </CardContent>
      </Card>
      <Card style={{ marginBottom: ".7rem", backgroundColor: "#1e272e" }}>
        <CardContent
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div style={{ color: "white" }}>
            <Typography>Administrar Usuarios</Typography>
          </div>
          <div>
            <Button
              variant="contained"
              color="warning"
              onClick={() => {
                navigate("/users");
              }}
              style={{ marginLeft: ".5rem" }}
            >
              IR
            </Button>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
