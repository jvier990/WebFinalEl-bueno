import {
  Grid,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
  CircularProgress,
} from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditUser() {
  const [task, setTask] = useState({
    id: "",
    nombre: "",
    email: "",
    password: "",
    description: "",
  });

  const params = useParams();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
    console.log(
      "NAMDERA PARA SABER SI FUNCIONA: " + e.target.name,
      e.target.value
    );
  };

  useEffect(() => {
    console.log("PARA UPDATED: " + params.id);
    if (params.id) {
      loadTask(params.id);
      console.log("entro condicion");
    }
  }, [params.id]);

  const loadTask = async (id) => {
    console.log("PARAMETRO BIEN O NO" + id);

    const res = await fetch(`http://localhost:4000/users/${id}`);

    const data = await res.json();
    console.log("LO QUE HAY EN DATA: " + data.id + data.Email);
    setTask({
      id: data.id,
      nombre: data.Nombre,
      email: data.Email,
      password: data.Password,
      description: data.Description,
    });

    setEditing(true);
  };
  const [editing, setEditing] = useState(false);

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log("LO QUE HAY EN TASK: " + task.id + task.Email);
    console.log(task);

    if (editing) {
      console.log("PARAMETRO PARA UPDATED: " + params.id);
      const res = await fetch(`http://localhost:4000/users/${params.id}`, {
        method: "PUT",

        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(task),
      });
      const data = await res.json();
      console.log(data);
    } else {
      await fetch("http://localhost:4000/users", {
        method: "POST",
        body: JSON.stringify(task),
        headers: { "Content-Type": "application/json" },
      });
    }

    setLoading(false);
    navigate("/users");
  };
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item xs={3}>
        <Card
          sx={{ mt: 5 }}
          style={{ backgroundColor: "#1e272e", padding: "1rem" }}
        >
          <Typography variant="5" textAlign="center" color="white">
            Create a task
          </Typography>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <TextField
                variant="filled"
                label="ID"
                sx={{ display: "block", margin: ".5rem 0" }}
                name="id"
                value={task.id}
                onChange={handleChange}
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
              />
              <TextField
                variant="filled"
                label="Nombre"
                sx={{ display: "block", margin: ".5rem 0" }}
                name="Nombre"
                value={task.nombre}
                onChange={handleChange}
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
              />
              <TextField
                variant="filled"
                label="Email"
                sx={{ display: "block", margin: ".5rem 0" }}
                name="Email"
                value={task.email}
                onChange={handleChange}
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
              />
              <TextField
                variant="filled"
                label="Password"
                sx={{ display: "block", margin: ".5rem 0" }}
                name="Password"
                value={task.password}
                onChange={handleChange}
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
              />

              <TextField
                variant="filled"
                label="Descripcion"
                sx={{ display: "block", margin: ".5rem 0" }}
                name="Descripcion"
                value={task.description}
                onChange={handleChange}
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
              />

              <Button
                variant="contained"
                color="primary"
                type="submit"
                disabled={
                  !task.id ||
                  !task.Año ||
                  !task.Marca ||
                  !task.Modelo ||
                  !task.Precio
                }
              >
                {loading ? (
                  <CircularProgress color="inherit" size={24} />
                ) : (
                  "Save"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
