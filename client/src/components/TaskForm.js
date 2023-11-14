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

export default function TaskForm() {
  const [task, setTask] = useState({
    id: "",
    Modelo: "",
    Marca: "",
    Año: "",
    Precio: "",
    Descripcion: "",
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

    const res = await fetch(`http://localhost:4000/task/${id}`);

    const data = await res.json();
    console.log("LO QUE HAY EN DATA: " + data.ID + data.Modelo);
    setTask({
      id: data.ID,
      Modelo: data.Modelo,
      Marca: data.Marca,
      Precio: data.Precio,
      Año: data.Año,
      Descripcion: data.Descripcion,
    });

    setEditing(true);
  };
  const [editing, setEditing] = useState(false);

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log("LO QUE HAY EN TASK: " + task.id + task.Modelo);
    console.log(task);

    if (editing) {
      console.log("PARAMETRO PARA UPDATED: " + params.id);
      const res = await fetch(`http://localhost:4000/task/${params.id}`, {
        method: "PUT",

        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(task),
      });
      const data = await res.json();
      console.log(data);
    } else {
      await fetch("http://localhost:4000/task", {
        method: "POST",
        body: JSON.stringify(task),
        headers: { "Content-Type": "application/json" },
      });
    }

    setLoading(false);
    navigate("/");
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
                label="Numero de serie"
                sx={{ display: "block", margin: ".5rem 0" }}
                name="id"
                value={task.id}
                onChange={handleChange}
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
              />
              <TextField
                variant="filled"
                label="Modelo"
                sx={{ display: "block", margin: ".5rem 0" }}
                name="Modelo"
                value={task.Modelo}
                onChange={handleChange}
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
              />
              <TextField
                variant="filled"
                label="Marca"
                sx={{ display: "block", margin: ".5rem 0" }}
                name="Marca"
                value={task.Marca}
                onChange={handleChange}
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
              />
              <TextField
                variant="filled"
                label="Año"
                sx={{ display: "block", margin: ".5rem 0" }}
                name="Año"
                value={task.Año}
                onChange={handleChange}
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
              />
              <TextField
                variant="filled"
                label="Precio"
                sx={{ display: "block", margin: ".5rem 0" }}
                name="Precio"
                value={task.Precio}
                onChange={handleChange}
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
              />

              <TextField
                variant="filled"
                label="Descripcion"
                sx={{ display: "block", margin: ".5rem 0" }}
                name="Descripcion"
                value={task.Descripcion}
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
                  "Create"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
