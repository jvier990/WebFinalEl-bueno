const { Router } = require("express");
const {
  getAllTask,
  getTask,
  postTask,
  deleteTask,
  updateTask,
} = require("../controllers/tasks.controllers");

const {
  postUser,
  getAllUsers,
  getUser,
  deleteUser,
  updateUser,
  getUserByEmail,
} = require("../controllers/usuariosControlers");
const router = Router();
const Con = require("../db");
//AUTOS
router.get("/task", getAllTask);

router.get("/task/:id", getTask);

router.post("/task", postTask);

router.delete("/task/:id", deleteTask);

router.put("/task/:id", updateTask);
//USERS

router.post("/users", postUser);

router.get("/users", getAllUsers);

router.get("/users/:id", getUser);

router.get("/users/email/:id", getUserByEmail);

router.delete("/users/:id", deleteUser);

router.put("/users/:id", updateUser);

module.exports = router;
