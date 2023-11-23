import { BrowserRouter, Route, Routes } from "react-router-dom";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import Menu from "./components/NatBar";
import Inicio from "./screens/inicio";
import Users from "./screens/users";
import { Container } from "@mui/material";
import EditUser from "./screens/editUser";

export default function App() {
  return (
    <BrowserRouter>
      <Menu></Menu>
      <Container>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/users/" element={<Users />} />
          <Route path="/users/edit/:id" element={<EditUser />} />
          <Route path="/autos" element={<TaskList />} />
          <Route path="/tasks/new" element={<TaskForm />} />
          <Route path="/tasks/:id/edit" element={<TaskForm />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}
