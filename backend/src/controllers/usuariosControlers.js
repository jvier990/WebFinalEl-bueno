const db = require("../db");

const getAllUsers = async (req, res, next) => {
  console.log("estoy en all users");
  try {
    const result = await db.query(
      '   Select * from "Concesionarios_El_Rayo_McQueen_QCHAU"."Usuarios" '
    );
    console.log(result.rows);
    res.json(result.rows);
  } catch (error) {
    next(error);
  }
};

const getUser = async (req, res, next) => {
  try {
    console.log(req.params.id);

    const { id } = req.params;
    const result = await db.query(
      '  Select * from "Concesionarios_El_Rayo_McQueen_QCHAU"."Usuarios" where "id" = $1',
      [id]
    );
    if (result.rows.length === 0)
      return res.status(404).json({ massage: "User not Found" });
    res.json(result.rows[0]);
    console.log(res.ID);
  } catch (error) {
    next(error);
  }
};

const getUserByEmail = async (req, res, next) => {
  try {
    console.log(req.params.id);

    const { id } = req.params;
    const result = await db.query(
      'Select * from "Concesionarios_El_Rayo_McQueen_QCHAU"."Usuarios" where "Email" = $1 ',
      [id]
    );
    console.log(result[0]);
    if (result.rows.length === 0)
      return res.status(404).json({ massage: "User not Found" });
    res.json(result.rows[0]);
    console.log(res.ID);
  } catch (error) {
    next(error);
  }
};

const postUser = async (req, res, next) => {
  try {
    const { nombre, email, password, description } = req.body;
    const result = await db.query(
      ' INSERT INTO "Concesionarios_El_Rayo_McQueen_QCHAU"."Usuarios" ("Nombre","Email","Password","Description") VALUES ($1,$2,$3,$4) RETURNING *',
      [nombre, email, password, description]
    );
    res.json(result.rows[0]);
    console.log(result);
  } catch (error) {
    next(error);
  }
};
const deleteUser = async (req, res, next) => {
  console.log("estoy en delete");
  try {
    console.log(req.params.id);
    const { id } = req.params;
    const result = await db.query(
      'delete from "Concesionarios_El_Rayo_McQueen_QCHAU"."Usuarios" where "id" = $1',
      [id]
    );
    if (result.rows.length === 0)
      return res.status(404).json({ massage: "task not found" });
    console.log("ELIMANOS");
    console.log(result);
    res.send("ELIMANDOS:" + id);
  } catch (error) {
    next(error);
  }
};

const updateUser = async (req, res, next) => {
  console.log(req.params.id);
  const idP = req.params.id;
  const { nombre, email, password, description } = req.body;
  //console.log("Parametro: " + idP + "!=" + id);
  try {
    const result = await db.query(
      'update "Concesionarios_El_Rayo_McQueen_QCHAU"."Usuarios" set "Nombre" =$1,"Email" =$2,"Password" = $3,"Description" = $4 where "id" = $5',
      [nombre, email, password, description, idP]
    );

    res.status(404).json({ massage: "Han sido cambiado: " + result.rowCount });
    console.log(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllUsers,
  getUser,
  getUserByEmail,
  postUser,
  updateUser,
  deleteUser,
};
