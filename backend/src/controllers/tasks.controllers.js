const db = require("../db");

const getAllTask = async (req, res, next) => {
  console.log("estoy en all task");
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

const getTask = async (req, res, next) => {
  try {
    console.log(req.params.id);

    const { id } = req.params;
    const result = await db.query(
      '  select * from "Concesionarios_El_Rayo_McQueen_QCHAU"."Automoviles" WHERE "ID" = $1',
      [id]
    );
    if (result.rows.length === 0)
      return res.status(404).json({ massage: "task not found" });
    res.json(result.rows[0]);
    console.log(res.ID);
  } catch (error) {
    next(error);
  }
};

const postTask = async (req, res, next) => {
  try {
    const { id, Modelo, Marca, Año, Precio, Descripcion } = req.body;
    const result = await db.query(
      '  INSERT INTO "Concesionarios_El_Rayo_McQueen_QCHAU"."Automoviles" ("ID","Modelo","Marca","Año","Precio","Descripcion") VALUES ($1,$2,$3,$4,$5,$6) RETURNING *',
      [id, Modelo, Marca, Año, Precio, Descripcion]
    );
    res.json(result.rows[0]);
    console.log(result);
  } catch (error) {
    next(error);
  }
};
const deleteTask = async (req, res, next) => {
  console.log("estoy en delete");
  try {
    console.log(req.params.id);
    const { id } = req.params;
    const result = await db.query(
      'delete from "Concesionarios_El_Rayo_McQueen_QCHAU"."Automoviles" WHERE "ID" = $1',
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

const updateTask = async (req, res, next) => {
  console.log(req.params.id);
  const idP = req.params.id;
  const { id, Modelo, Marca, Año, Precio, Descripcion } = req.body;
  console.log("Parametro: " + idP + "!=" + id);
  try {
    const result = await db.query(
      'update "Concesionarios_El_Rayo_McQueen_QCHAU"."Automoviles" set  "ID" = $1, "Modelo" =$2, "Marca"=$3,"Año" =$4,"Precio" =$5, "Descripcion" =$6  where "ID" = $7',
      [id, Modelo, Marca, Año, Precio, Descripcion, idP]
    );

    res.status(404).json({ massage: "Han sido cambiado: " + result.rowCount });
    console.log(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllTask,
  getTask,
  postTask,
  updateTask,
  deleteTask,
};
