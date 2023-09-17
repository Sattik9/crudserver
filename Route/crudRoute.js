const express=require('express');
const Route=express.Router();
const crudControll=require("../Controller/crudController");
Route.get("/",crudControll.views);
Route.get("/creation",crudControll.Add);
Route.post("/create",crudControll.createProcess);
Route.get("/edit/:id",crudControll.edit);
Route.post("/update",crudControll.update);
Route.get("/delete/:id",crudControll.deletion);

module.exports=Route;