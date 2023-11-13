import React from "react";
import { useEffect, useState } from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import {useNavigate} from 'react-router-dom'

export default function TaskList() {
  const [tasks, setTastks] = useState([]);
  const navigate = useNavigate()

  const loadTask = async () => {
    const res = await fetch("http://localhost:4000/task");
    const data = await res.json();
    setTastks(data);
    console.log(data);
  };
  const handdleDelete = async (id) => {
    try {
      console.log(id);
      const res = await fetch(`http://localhost:4000/task/${id}`, {
        method: "DELETE",
      });
      //setTastks(tasks.filter((task) => task.id !== id));
      loadTask();
      console.log("Eliminado");
    } catch (error) {
      console.log("dsjdksd");
    }
  };
  useEffect(() => {
    loadTask();
  }, []);
  return (
    <>
      <h1>Task list</h1>
      {tasks.map((task) => (
        <Card
          style={{ marginBottom: ".7rem", backgroundColor: "#1e272e" }}
          key={tasks.ID}
        >
          <CardContent
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div style={{ color: "white" }}>
              <Typography>{task.ID}</Typography>
              <Typography>{task.Modelo}</Typography>
              <Typography>{task.Marca}</Typography>
              <Typography>{task.Año}</Typography>
              <Typography>{task.Precio}</Typography>
            </div>
            <div>
              <Button
                variant="contained"
                color="inherit"
                onClick={() => navigate(`/tasks/${task.ID}/edit`)}
              >
                Edit
              </Button>
              <Button
                variant="contained"
                color="warning"
                onClick={() => {
                  handdleDelete(task.ID);
                }}
                style={{ marginLeft: ".5rem" }}
              >
                Delete
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  );
}